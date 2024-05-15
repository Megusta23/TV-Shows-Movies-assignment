import tmdb from "../assets/tmdb.svg";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Powered by</p>

      <img src={tmdb} alt="tmdb" />
    </div>
  );
};

export default Footer;
