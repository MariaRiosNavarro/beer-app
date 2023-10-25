import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  return (
    <>
      <div className={`btn ${props.bgColor}`}>
        <Link to={props.href}>{props.element}</Link>
      </div>
    </>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  bgColor: PropTypes.string,
  element: PropTypes.element,
};

export default Button;
