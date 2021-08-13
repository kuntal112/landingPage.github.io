let Card = ({ imgSrc, item }) => {
  return (
    <div className="card_item">
      <figure>
        <img src={imgSrc} alt="item" />
      </figure>
      <h3>{item}</h3>
    </div>
  );
};
export default Card;
