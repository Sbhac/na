const REGISTRATION_SHEET_ID = '1bRrS7NfI0gT5p99m2OR81UINCUXa6EMYGY8rJt4KL3k';

function setupRegistrationSheet() {
  return getRegistrationSheet_();
}

function getRegistrationSheet_() {
  const spreadsheet = SpreadsheetApp.openById(REGISTRATION_SHEET_ID);
  let sheet = spreadsheet.getSheetByName('Registrations');

  if (!sheet) {
    const firstSheet = spreadsheet.getSheets()[0];
    if (firstSheet && firstSheet.getLastRow() === 0) {
      firstSheet.setName('Registrations');
      sheet = firstSheet;
    } else {
      sheet = spreadsheet.insertSheet('Registrations');
    }
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted at', 'Name', 'Mobile number', 'Review']);
    sheet.setFrozenRows(1);
    sheet.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm:ss');
    sheet.getRange('B:C').setNumberFormat('@');
  }

  return sheet;
}

function doPost(e) {
  const params = e && e.parameter ? e.parameter : {};
  const requestId = String(params.requestId || '').replace(/[^a-zA-Z0-9-]/g, '').slice(0, 80);

  if (String(params.website || '').trim()) {
    return registrationResponse_(requestId, true);
  }

  const name = String(params.name || '').trim();
  const phone = String(params.phone || '').trim();
  const review = String(params.review || '').trim();
  if (name.length < 2 || name.length > 80 || !/^[0-9+\s-]{7,24}$/.test(phone) || review.length < 3 || review.length > 1000 || params.consent !== 'yes') {
    return registrationResponse_(requestId, false);
  }

  const lock = LockService.getScriptLock();
  let lockAcquired = false;
  try {
    lock.waitLock(10000);
    lockAcquired = true;

    const sheet = getRegistrationSheet_();
    sheet.appendRow([new Date(), safeCellText_(name), safeCellText_(phone), safeCellText_(review)]);
    return registrationResponse_(requestId, true);
  } catch (error) {
    return registrationResponse_(requestId, false);
  } finally {
    if (lockAcquired) lock.releaseLock();
  }
}

function safeCellText_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function registrationResponse_(requestId, ok) {
  const message = JSON.stringify({
    type: 'portfolio-registration-result',
    requestId: requestId,
    ok: ok
  }).replace(/</g, '\\u003c');
  const html = '<!doctype html><html><body><script>window.top.postMessage(' + message + ', "*");</script></body></html>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}