// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./BeerList.scss";
import Navigation from "../components/Navigation/Navigation";
import Card from "../components/Card/Card";

const BeerList = () => {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(count);0
  // }, [count]);
  return (
    <>
      <h1>BeerList</h1>
      <section>
        <Card />
        {/* <article>
          <h2>{props.property}</h2>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            click +1
          </button>
          <p>{count}</p>
          <Link to="/">See More</Link>
        </article> */}
      </section>
      <Navigation />
    </>
  );
};

// BeerList.propTypes = {
//   property: PropTypes.string,
// };

export default BeerList;
