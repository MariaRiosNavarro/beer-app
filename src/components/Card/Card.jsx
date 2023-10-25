import PropTypes from "prop-types";
import "./Card.scss";
import Button from "../Button/Button";

const Card = ({ beerItem }) => {
  return (
    <>
      <article className="card">
        <div className="img-card-wrapper">
          <img src={beerItem.image_url} alt={beerItem.name} />
        </div>
        <div className="text-card-wrapper">
          <h2>{beerItem.name}</h2>
          <h3>{beerItem.tagline}</h3>
          <p>Created by : {beerItem.name}</p>
          <Button
            bgColor="bg-yellow"
            element="Details"
            href={`/beer/${beerItem._id}`}
          />
        </div>
      </article>
    </>
  );
};

Card.propTypes = {
  beerItem: PropTypes.object,
};

export default Card;
