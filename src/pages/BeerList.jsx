import { useState, useEffect } from "react";
import "./BeerList.scss";
import Navigation from "../components/Navigation/Navigation";
import Card from "../components/Card/Card";

const url = "https://ih-beers-api2.herokuapp.com/beers";

const BeerList = () => {
  const [beerData, setBeerData] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      })
      .catch((error) => {
        console.error("Error Message ❌🍺❌ ", error);
      });
  }, []);

  if (!beerData) {
    return (
      <div className="animation">
        <p>
          L <span className="ani">🍺</span> O <span className="ani">🍺</span> A
          <span className="ani">🍺</span> D <span className="ani">🍺</span> I
          <span className="ani">🍺</span> N <span className="ani">🍺</span> G
          <span className="ani">🍺</span> ...
        </p>
      </div>
    );
  }

  return (
    <>
      <section>
        {beerData.map((beer) => (
          <Card key={beer._id} beerItem={beer} />
        ))}
      </section>
      <Navigation />
    </>
  );
};

export default BeerList;
