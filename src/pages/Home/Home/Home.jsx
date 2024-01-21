import FAQ from "../FAQ/FAQ";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Contact from "../../Shared/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
