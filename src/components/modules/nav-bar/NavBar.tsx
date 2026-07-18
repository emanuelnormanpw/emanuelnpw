import type { NavBarProps } from "./types";
import { navWrapperCx } from "./styles";
import { DEFAULT_LINKS } from "./usecase";

const NavBar = (props: NavBarProps) => {
  const { links = DEFAULT_LINKS } = props;

  return (
    <header css={navWrapperCx} role="banner">
      <nav className="nav-inner" aria-label="Main navigation">
        <a href="/" className="nav-brand" aria-label="emanuelnpw-personal-web">
          emanuelnpw
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a
            href="/emanuelnpw-cv.pdf"
            download="emanuelnpw-cv.pdf"
            className="nav-cta-btn"
            aria-label="Download CV"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
