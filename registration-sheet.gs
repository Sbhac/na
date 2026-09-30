function doPost(e) {
  const params = e && e.parameter ? e.parameter : {};
  const requestId = String(params.requestId || '').replace(/[^a-zA-Z0-9-]/g, '').slice(0, 80);

  if (String(params.website || '').trim()) {
    return registrationResponse_(requestId, true);
  }

  const name = String(params.name || '').trim();
  const phone = String(params.phone || '').trim();
  if (name.length < 2 || name.length > 80 || !/^[0-9+\s-]{7,24}$/.test(phone) || params.consent !== 'yes') {
    return registrationResponse_(requestId, false);
  }

  const lock = LockService.getScriptLock();
  let lockAcquired = false;
  try {
    lock.waitLock(10000);
    lockAcquired = true;

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!spreadsheet) throw new Error('Bind this script to a spreadsheet first.');

    let sheet = spreadsheet.getSheetByName('Registrations');
    if (!sheet) sheet = spreadsheet.insertSheet('Registrations');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Submitted at', 'Name', 'Mobile number']);
      sheet.setFrozenRows(1);
      sheet.getRange('B:C').setNumberFormat('@');
    }

    sheet.appendRow([new Date(), safeCellText_(name), safeCellText_(phone)]);
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
  const html = '<!doctype html><html><body><script>window.parent.postMessage(' + message + ', "*");</script></body></html>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}