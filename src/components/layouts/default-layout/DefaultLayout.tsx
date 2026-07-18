import { Outlet } from "react-router-dom";

import { useLenis } from "@hooks/use-lenis";
import { AmbientBackground } from "@shapes/ambient-background";
import { NavBar } from "@modules/nav-bar";
import { Footer } from "@modules/footer";

import { pageShellCx } from "./styles";

const DefaultLayout = () => {
  useLenis();

  return (
    <div css={pageShellCx}>
      <AmbientBackground />

      {/* Skip to content link for keyboard/screen reader users */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <NavBar />

      <div className="page-outlet">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
