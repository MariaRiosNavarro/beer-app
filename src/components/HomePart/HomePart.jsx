import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./HomePart.scss";

const HomePart = (props) => {
  return (
    <>
      <section>
        <article>
          <Link to={props.href}>
            <div className="img-home-wrapper">
              <img src={props.src} alt="Home Decoration Picture" />
            </div>
          </Link>
        </article>
      </section>
    </>
  );
};

HomePart.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
};

export default HomePart;
