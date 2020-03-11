import React from "react";
import { Link } from "react-router-dom";
import twitter from "../../svg/twitter.svg";
import facebook from "../../svg/facebook.svg";
import instagram from "../../svg/instagram.svg";
import apple from "../../svg/apple.svg";
import windows from "../../svg/google-play-store.svg";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="download">
          <div className="heading">
            <span className="text-primary"> Download App</span>
          </div>
          <div className="image">
            <img src={apple} alt="AppStore" />
            <img src={windows} alt="PlayStore" />
          </div>
        </div>
        <div className="footer-text">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quidem, perspiciatis facilis aliquid voluptatibus veniam deleniti
            iusto aspernatur fuga quod dolorum dolorem accusamus magnam illo
            autem fugit ratione debitis, nostrum sint cupiditate quis minima
            unde possimus itaque. Maxime dolorum laborum accusantium rerum
            perferendis? Blanditiis in odio porro ducimus quia modi!
          </div>
          <div className="links">
            <Link to="#">Lorem ipsum dolor sit </Link>
            <Link to="#">Lorem ipsum dolor sit</Link>
            <Link to="#">Lorem ipsum dolor sit</Link>
          </div>
        </div>
        <div className="contact">
          <div className="heading">
            <span className="text-primary">Connect with Us</span>
          </div>
          <div className="image">
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
