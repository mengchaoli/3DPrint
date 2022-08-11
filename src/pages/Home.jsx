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

  const selectedSections = [];

  const handleSectionsChange = (section) => {
    if (selectedSections.includes(section)) {
      const idx = selectedSections.indexOf(section);
      selectedSections.splice(idx, 1);
    } else {
      selectedSections.push(section);
    }
  };

  return (
    <div className="home-wrapper">
      What section(s) would you like to add to your space?
      <div className="home-section-card-wrapper">
        {sectionsList.map((section) => (
          <div className="center" key={section}>
            <SectionCard
              name={section}
              onClick={() => handleSectionsChange(section)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
