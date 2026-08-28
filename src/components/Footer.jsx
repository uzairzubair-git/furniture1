import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-links">
          <h4>Help</h4>

          <ul>
            {footerLinks.map((label) => (
              <li key={label}>
                <a href="/help">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>

          <form onSubmit={handleSubscribe}>
            <label htmlFor="home-email" className="sr-only">
              Email address
            </label>
            <input
              id="home-email"
              type="email"
              required
              placeholder="Enter Your Email Address"
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>2023 Funiro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
