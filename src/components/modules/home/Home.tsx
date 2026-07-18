import { About } from "../about";
import { Hero } from "../hero";
import { Portfolio } from "../portfolio";

const Home = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Portfolio />
      <About />
      {/* <Testimonials />
      <Services /> */}
    </main>
  );
};

export default Home;
