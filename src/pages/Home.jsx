import SectionCard from "../components/sectionCard";
const Home = () => {
  const sectionsList = [
    "weather",
    "sports",
    "art",
    "beauty",
    "fashion",
    "tech",
    "gaming",
  ];

  return (
    <div className="home-wrapper">
      What section(s) would you like to add to your space?
      <div className="home-section-card-wrapper">
        {sectionsList.map((section) => (
          <div className="center">
            <SectionCard name={section} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
