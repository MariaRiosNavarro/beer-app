import "./Home.scss";
import HomePart from "../components/HomePart/HomePart";

const Home = () => {
  return (
    <div className="home-wrapper">
      <HomePart
        href={"/beers"}
        src={"/img/home.png"}
        title="All Beers"
        description="In this journey through the world of beer, our app celebrates the rich tapestry of styles, flavors, and stories that make beer a truly global phenomenon"
      ></HomePart>
      <HomePart
        href={`/beer/random`}
        src={"/img/random.png"}
        title="Random Beer"
        description="Celebrate the diversity of the world's beers with just a click! Click here to discover a random beer from around the globe and immerse yourself in the rich tapestry of flavors"
      ></HomePart>
    </div>
  );
};

export default Home;
