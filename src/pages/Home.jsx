import "./Home.scss";
import HomePart from "../components/HomePart/HomePart";
import PropTypes from "prop-types";

const Home = () => {
  return (
    <>
      <HomePart href={"/beers"} src={"/public/img/home.jpeg"}></HomePart>
      <HomePart
        href={`/beer/random`}
        src={"/public/img/random.jpeg"}
      ></HomePart>
    </>
  );
};

Home.propTypes = {
  id: PropTypes.string,
};

export default Home;
