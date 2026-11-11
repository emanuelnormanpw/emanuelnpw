import { About } from "../about";
import { Experience } from "../experience";
import { Hero } from "../hero";
import { Portfolio } from "../portfolio";

const Home = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Experience />
      <Portfolio />
      <About />
      {/* <Testimonials />
      <Services /> */}
    </main>
  );
};

export default Home;
