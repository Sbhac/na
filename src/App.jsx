import "./App.css";
import profilePhoto from "./assets/profile.png";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">SB<span>.</span></a>

        <div className="nav-links">
  <a href="#about">About</a>
  <a href="#experience">Experience</a>
  <a href="#education">Education</a>
  <a href="#skills">Skills</a>
  <a href="#certifications">Certifications</a>
  <a href="#projects">Projects</a>
</div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="status">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Swarup
              <br />
              <span>Bandagale.</span>
            </h1>

            <p className="hero-description">
              MBA Finance professional passionate about accounting,
              financial analysis, and creating value through data.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>
              <a href="#about" className="text-button">
                More About Me ↓
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="hero-circle">
  <img
    src={profilePhoto}
    alt="Swarup Bandagale"
    className="hero-photo"
  />
</div>

            <div className="floating-card card-top">
              <span className="mini-icon">✳</span>
              <div>
                <small>FOCUS</small>
                <strong>Finance & Accounts</strong>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="mini-icon">↗</span>
              <div>
                <small>MY APPROACH</small>
                <strong>Accuracy. Growth.</strong>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>BASED IN MAHARASHTRA, INDIA</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        <section className="about section" id="about">
          <p className="section-label">01 / ABOUT ME</p>
          <h2>
            Driven by numbers.
            <br />
            <span>Focused on accuracy. Built for finance.</span>
          </h2>
          <p className="section-description">
            Detail-oriented Accounts Executive with experience in billing, invoicing, and accounting records. MBA in Financial Management with strong skills in Tally Prime, Advanced Excel, GST, taxation, and financial analysis. Focused on accuracy, compliance, and efficient financial operations..
          </p>
        </section>

        <section className="experience section" id="experience">
  <p className="section-label">02 / EXPERIENCE</p>
  <h2>My Professional <span>Journey</span></h2>

  <div className="project-card">
    <div>
      <span className="project-number">AUG 2026 — PRESENT</span>
      <h3>Executive – Accounts</h3>
      <p>
        Atharva Foundries Pvt. Ltd. (Yash Group of Industries)
      </p>
      <p>
        MIDC Wai, Satara, Maharashtra
      </p>
      <p>
        Billing, invoicing, accounting records, GST/PF/ESIC
        documentation and vendor coordination.
      </p>
    </div>
  </div>
</section>

<section className="education section" id="education">
  <p className="section-label">03 / EDUCATION</p>
  <h2>Academic <span>Background</span></h2>

  <div className="project-card">
    <div>
      <span className="project-number">2024 — 2026</span>
      <h3>MBA — Financial Management</h3>
      <p>
        NBN Sinhgad Technical Institutes Campus, Pune
      </p>
      <p>CGPA: 7.48 / 10 — First Class</p>
    </div>
  </div>

  <div className="project-card">
    <div>
      <span className="project-number">2021 — 2024</span>
      <h3>Bachelor of Commerce (B.Com)</h3>
      <p>Kisan Veer Mahavidyalaya, Wai</p>
      <p>CGPA: 6.42 / 10</p>
    </div>
  </div>
</section>
        <section className="skills section" id="skills">
          <p className="section-label">02 / MY EXPERTISE</p>
          <h2>Skills & <span>Tools</span></h2>

          <div className="skill-grid">
            <div className="skill-card">
              <span>01</span>
              <h3>Financial Accounting</h3>
              <p>Accounting operations, vouchers, and reconciliation.</p>
            </div>

            <div className="skill-card">
              <span>02</span>
              <h3>Microsoft Excel</h3>
              <p>Data management, formulas, reports, and analysis.</p>
            </div>

            <div className="skill-card">
              <span>03</span>
              <h3>Tally & GST</h3>
              <p>Accounting software and taxation-related work.</p>
            </div>

            <div className="skill-card">
              <span>04</span>
              <h3>Financial Analysis</h3>
              <p>Working with financial data and business information.</p>
            </div>
          </div>
        </section>

        <section className="certifications section" id="certifications">
  <p className="section-label">04 / CERTIFICATIONS</p>
  <h2>Professional <span>Certifications</span></h2>

  <div className="project-card">
    <div>
      <span className="project-number">NOV 2025</span>
      <h3>Certified Course in Professional Accountant</h3>
      <p>State Institute of Information Technology (SIIT)</p>
      <p>97% — Grade A with Distinction</p>
      <p>
        Tally Prime, Payroll, Direct & Indirect Tax,
        Advanced Excel and Finalisation of Accounts.
      </p>
    </div>
  </div>

  <div className="project-card">
    <div>
      <span className="project-number">NOV 2025</span>
      <h3>Tally Prime with GST</h3>
      <p>State Institute of Information Technology (SIIT)</p>
      <p>Grade A</p>
    </div>
  </div>

  <div className="project-card">
    <div>
      <span className="project-number">NOV 2025</span>
      <h3>Advanced Excel</h3>
      <p>State Institute of Information Technology (SIIT)</p>
      <p>Grade A</p>
    </div>
  </div>

  <div className="project-card">
    <div>
      <span className="project-number">DEC 2023</span>
      <h3>English Typing — 30 WPM</h3>
      <p>Maharashtra State Council of Examination, Pune</p>
      <p>Grade B</p>
    </div>
  </div>
</section>

      {/* PROJECTS SECTION */}
      <section className="projects section" id="projects">
        <p className="section-label">06 / MY WORK</p>

        <h2>
          Selected <span>Projects</span>
        </h2>

        <a
          className="project-card"
          href="/swarup%20research%20project.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <span className="project-number">MBA / 01</span>
            <h3>Research Project</h3>
            <p>
              An empirical study on the financial risk tolerance
              of selected individuals and its impact on
              investment decisions in Pune District.
            </p>
            <p>

            </p>
          </div>
          <span className="project-arrow">↗</span>
        </a>

        <a
          className="project-card"
          href="/swarup%20OJT%20project.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <span className="project-number">OJT / 02</span>
            <h3>On The Job Training</h3>
            <p>
              A study on loans ans advances with refrence to 
              Wai Urban Co-operative Bank.
            </p>
          </div>
          <span className="project-arrow">↗</span>
        </a>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact section" id="contact">
          <p className="section-label">04 / GET IN TOUCH</p>
          <h2>Let's create<br /><span>something valuable.</span></h2>
          <p>Have an opportunity or project in mind? Let's connect.</p>
          <div className="hero-buttons">
  <a
    className="primary-button"
    href="mailto:swarupbandagale6@email.com"
  >
    Email Me ↗
  </a>

  <a
    className="nav-button"
    href="https://linkedin.com/in/swarupbandagale-264a18190"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a
    className="nav-button"
    href="tel:+917798208652"
  >
    Call Me: +91 77982 08652
  </a>
</div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <a href="#home" className="logo">SB<span>.</span></a>
        <p>Designed with purpose. Built for the future.</p>
        <span>© 2026 Swarup Bandagale</span>
      </footer>
    </div>
  );
}

export default App;