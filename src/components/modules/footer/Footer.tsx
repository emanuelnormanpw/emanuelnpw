import { footerSectionCx } from "./styles";
import { NAV_LINKS, SOCIAL_LINKS } from "./usecase";

const Footer = () => {
  return (
    <footer css={footerSectionCx} role="contentinfo">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <p className="footer-brand-title">emanuelnpw</p>
            <address className="footer-contact">
              <a href="tel:+6287759011123" className="footer-contact-link">
                +6287759011123
              </a>
              <a
                href="mailto:emanuelnpw@gmail.com"
                className="footer-contact-link"
              >
                emanuelnpw@gmail.com
              </a>
            </address>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-nav-group">
              <p className="footer-nav-heading">Menu</p>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-nav-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer-nav-group">
              <p className="footer-nav-heading">Social Media</p>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-nav-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`${link.label} (opens in new tab)`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 emanuelnpw.</p>
          <div className="footer-legal-links">
            <p className="footer-legal-link">ꦚꦮꦶꦗꦶ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
