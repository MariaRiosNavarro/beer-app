import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./HomePart.scss";

const HomePart = (props) => {
  return (
    <>
      <section className="home-section">
        <article>
          <Link to={props.href}>
            <div className="img-home-wrapper">
              <img src={props.src} alt="Home Decoration Picture" />
            </div>
            <h2>{props.title}</h2>
          </Link>
          <p>{props.description}</p>
        </article>
      </section>
    </>
  );
};

HomePart.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default HomePart;
