import PropTypes from "prop-types";
import "./Card.scss";
import Button from "../Button/Button";

const Card = (props) => {
  return (
    <>
      <article>
        <div className="img-card-wrapper">
          <img src={props.image_url} alt={props.name} />
        </div>
        <div className="text-card-wrapper">
          <h2>{props.name}</h2>
          <h3>{props.tagline}</h3>
          <p>Created by : {props.name}</p>
          <Button
            bgColor="bg-yellow"
            element="Details"
            href={`/beer/${props._id}`}
          />
        </div>
      </article>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image_url: PropTypes.string,
  tagline: PropTypes.string,
  _id: PropTypes.string,
};

export default Card;
