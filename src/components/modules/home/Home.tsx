import loadable from "@loadable/component";

const Hero = loadable(() => import("../hero/Hero"));
const Portfolio = loadable(() => import("../portfolio/Portfolio"));
const About = loadable(() => import("../about/About"));

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
