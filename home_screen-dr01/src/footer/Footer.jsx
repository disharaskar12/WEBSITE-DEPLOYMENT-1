import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <hr></hr>
      <section className="footer-content">
        <div className="footer-section">
          <h6 className="footer-heading">
            <span className="footer-icon">🔍</span>
            <strong>Infobytes Technosys</strong>
          </h6>
          <p>We Believe in Transparency!</p>
        </div>

        <div className="footer-section-3">
        <li class="nav-item">
              <a
                href="https://www.infobytestechnosys.in/privacy1.html"
                class="nav-link px-2 text-body-secondary"
              >
                Privacy and Policies
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.infobytestechnosys.in/term.html"
                class="nav-link px-2 text-body-secondary"
              >
                Terms and Conditions
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.infobytestechnosys.in/delete.html"
                class="nav-link px-2 text-body-secondary"
              >Delete Account
              </a>
            </li>
            
        

        </div>

        <div className="footer-section"></div>

        <div className="footer-section">
          <h6 className="footer-heading">
            <span className="footer-icon">✉️</span>
            <strong>Contact Us</strong>
          </h6>
          <p>reachus@infobytestechnosysys.in</p>
        </div>
      </section>

      <div className="footer-bottom">
        <p className="copyright-text">
          © 2024 Copyright:
          <a className="footer-link" href="/">
            InfobytesTechnosys.in
          </a>
        </p>
      </div>
    </div>
  );
}
