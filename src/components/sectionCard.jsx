const SectionCard = (props) => {
  return (
    <div className="section-card">
      <div className="section-card__img"></div>
      <div className="section-card__name">{props.name}</div>
    </div>
  );
};

export default SectionCard;
