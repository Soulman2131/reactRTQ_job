import ChoiceHero from "../components/ChoiceHero";
import Hero from "../components/Hero";
import Jobs from "../screen/Jobs";
import FooterJob from "../screen/FooterJob";

const Home = () => {
  return (
    <>
      <Hero />
      <ChoiceHero />
      <Jobs isHome={true} />
      <FooterJob />
    </>
  );
};

export default Home;
