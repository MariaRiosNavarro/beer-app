import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import DetailCard from "../components/DetailCard/DetailCard";
import Navigation from "../components/Navigation/Navigation";
import "./Random.scss";

const Random = () => {
  const [random, setRandom] = useState();

  const randomUrl = `https://ih-beers-api2.herokuapp.com/beers/random`;

  useEffect(() => {
    fetch(randomUrl)
      .then((response) => response.json())
      .then((beerRandom) => {
        setRandom(beerRandom);
      })
      .catch((error) => {
        console.error("Error Message ❌🍺❌ ", error);
      });
  }, []);

  if (!random) {
    return <Loading />;
  }

  return (
    <>
      <section className="random-wrapper">
        <DetailCard detailItem={random} href="/" />
      </section>
      <Navigation />
    </>
  );
};

export default Random;
