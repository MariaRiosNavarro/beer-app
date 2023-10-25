// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Loading.scss";

const Loading = () => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  return (
    <div>
      <div className="animation">
        <p>
          L <span className="ani">🍺</span> O <span className="ani">🍺</span> A
          <span className="ani">🍺</span> D <span className="ani">🍺</span> I
          <span className="ani">🍺</span> N <span className="ani">🍺</span> G
          <span className="ani">🍺</span> ...
        </p>
      </div>
      <Link to="/">See More</Link>
    </div>
  );
};

// Loading.propTypes = {
//   property: PropTypes.string,
// };

export default Loading;
