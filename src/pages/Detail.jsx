import "./Detail.scss";
import Navigation from "../components/Navigation/Navigation";
import DetailCard from "../components/DetailCard/DetailCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Detail = () => {
  const [beer, setBeer] = useState();

  const { idBeer } = useParams();

  useEffect(() => {
    if (idBeer) {
      fetch(`https://ih-beers-api2.herokuapp.com/beers/${idBeer}`)
        .then((res) => res.json())
        .then((oneBeer) => setBeer(oneBeer))
        .catch((err) => console.error("error fetching by ID", err));
    } else {
      fetch("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((res) => res.json())
        .then((randomBeer) => setBeer(randomBeer))
        .catch((err) => console.error("error fetching random beer", err));
    }
  }, []);

  if (!beer) {
    return <Loading />;
  }

  let backLink = idBeer ? "/beers" : "/";

  return (
    <>
      <section className="detail-wrapper">
        <DetailCard detailItem={beer} href={backLink} />
      </section>
      <Navigation />
    </>
  );
};

export default Detail;
