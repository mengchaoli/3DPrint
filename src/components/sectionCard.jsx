import { useState } from "react";

const SectionCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const { name, onClick } = props;

  const handleCardOnClick = () => {
    setIsSelected(!isSelected);
    onClick(name);
  };

  return (
    <div
      className={`section-card ${isSelected ? "selected" : ""}`}
      onClick={handleCardOnClick}
    >
      <div className="section-card__img"></div>
      <div className="section-card__name">{name}</div>
    </div>
  );
};

export default SectionCard;
