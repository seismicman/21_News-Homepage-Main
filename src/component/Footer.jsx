import React from "react";
import image_1 from "../assets/images/image-retro-pcs.jpg";
import image_2 from "../assets/images/image-top-laptops.jpg";
import image_3 from "../assets/images/image-gaming-growth.jpg";

const Footer = () => {
  return (
    <article className="bottom-news">
      <div className="one-two">
        <div className="gallery">
          <img src={image_1} alt="image-retro-pcs.jpg" className="image1" />
          <div className="numbers">
            <h2 className="digit">01</h2>
            <a href="" className="title-numbers">
              Reviving Retro PCs
            </a>
            <p className="subtitle-numbers">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="gallery">
          <img src={image_2} alt="image-top-laptops.jpg" className="image2" />
          <div className="numbers">
            <h2 className="digit">02</h2>
            <a href="" className="title-numbers">
              Top 10 Laptops of 2022
            </a>
            <p className="subtitle-numbers">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
      </div>
      <div className="three">
        <div className="gallery">
          <img src={image_3} alt="image-gaming-growth.jpg" className="image3" />
          <div className="numbers">
            <h2 className="digit">03</h2>
            <a href="" className="title-numbers">
              The Growth of Gaming
            </a>
            <p className="subtitle-numbers">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Footer;
