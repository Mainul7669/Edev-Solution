import FAQ from "../FAQ/FAQ";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Review from "../Review/Review";
import FormBanner from "../FormBanner/FormBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <FAQ />
      <Review/>
      <FormBanner/>
    </div>
  );
};

export default Home;
