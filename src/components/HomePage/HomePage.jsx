import HomePageContact from "./HomePageContact";
import HomePageEducation from "./HomePageEducation";
import HomPageHero from "./HomPageHero";
import ProfessionalHighlights from "./ProfessionalHighlights";
import TechnologiesExp from "./TechnologiesExp";
import './HomePage.css'
const HomePage = () => {
  return (
    <>
      <HomPageHero />
      <HomePageEducation />
      <TechnologiesExp />
      <ProfessionalHighlights />
      <HomePageContact />
    </>
  );
}
export default HomePage;

