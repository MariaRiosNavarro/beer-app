import { useState, useEffect } from "react";
import "./BeerList.scss";
import Navigation from "../components/Navigation/Navigation";
import Loading from "../components/Loading/Loading";
import Card from "../components/Card/Card";

const url = "https://ih-beers-api2.herokuapp.com/beers";

const BeerList = () => {
  const [beerData, setBeerData] = useState();

  setTimeout(
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setBeerData(data);
        })
        .catch((error) => {
          console.error("Error Message ❌🍺❌ ", error);
        });
    }, []),
    5000
  );

  if (!beerData) {
    return <Loading />;
  }

  return (
    <>
      <section className="grid-list-section">
        {beerData.map((beer) => (
          <Card key={beer._id} beerItem={beer} />
        ))}
      </section>

      <Navigation />
    </>
  );
};

export default BeerList;
