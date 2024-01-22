import FAQ from "../FAQ/FAQ";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Contact from "../../Shared/Contact/Contact";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
