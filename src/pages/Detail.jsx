import "./Detail.scss";
import Navigation from "../components/Navigation/Navigation";
import DetailCard from "../components/DetailCard/DetailCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Detail = () => {
  const [beer, setBeer] = useState();

  const { idBeer } = useParams();

  const beerUrl = `https://ih-beers-api2.herokuapp.com/beers/${idBeer}`;

  useEffect(() => {
    fetch(beerUrl)
      .then((response) => response.json())
      .then((oneBeer) => {
        setBeer(oneBeer);
      })
      .catch((error) => {
        console.error("Error Message ❌🍺❌ ", error);
      });
  }, []);

  if (!beer) {
    return <Loading />;
  }

  return (
    <>
      <section className="detail-wrapper">
        <DetailCard detailItem={beer} />
      </section>
      <Navigation />
    </>
  );
};

export default Detail;
