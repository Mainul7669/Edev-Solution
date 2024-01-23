import FAQ from "../FAQ/FAQ";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services />
      <FAQ />
      <Review/>
    </div>
  );
};

export default Home;
