import PropTypes from "prop-types";
import "./DetailCard.scss";
import Button from "../Button/Button";
import { backSvg } from "../../assets/svg/svg";

const DetailCard = ({ detailItem }) => {
  return (
    <>
      <article className="detail-card">
        <div className="img-detail-wrapper">
          <img src={detailItem.image_url} alt={detailItem.name} />
        </div>
        <div className="text-detail-wrapper">
          <h2>{detailItem.name}</h2>
          <h3>{detailItem.tagline}</h3>
          <div className="row space">
            <p> First brewed: </p>
            <span>{detailItem.first_brewed}</span>
          </div>
          <div className="row space">
            <p> Attenuation level: </p>
            <span>{detailItem.attenuation_level}</span>
          </div>
          <p className="description">{detailItem.description}</p>
          <Button bgColor="bg-yellow" element={backSvg} href="/beers" />
        </div>
      </article>
    </>
  );
};

DetailCard.propTypes = {
  detailItem: PropTypes.object,
};

export default DetailCard;
