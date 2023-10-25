import Button from "../Button/Button";
import "./Navigation.scss";
import { beerSvg } from "../../assets/svg/svg";

const Navigation = () => {
  return (
    <>
      <footer className="footer">
        <Button bgColor="bg-white" href="/" element={beerSvg} />
      </footer>
    </>
  );
};

export default Navigation;
