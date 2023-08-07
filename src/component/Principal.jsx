import React from "react";
import image_web_3_desktop from "../assets/images/image-web-3-desktop.jpg";
import image_web_3_mobile from "../assets/images/image-web-3-mobile.jpg";

const Principal = () => {
  return (
    <article className="principal">
      <div className="left-news">
        <div className="left-image-desktop">
          <img src={image_web_3_desktop} alt="image-web-3-desktop.jpg" />
        </div>
        <div className="left-image-mobile">
          <img src={image_web_3_mobile} alt="image-web-3-mobile.jpg" />
        </div>
        <div className="left-text">
          <div className="title-container">
            <h2 className="title">The Bright Future of Web 3.0?</h2>
          </div>
          <div className="overview">
            <p className="overview-text">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button href="#" className="read-more">
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="right-news">
        <h2 className="title-right">New</h2>
        <div className="news-links">
          <a href="" className="news-link">
            Hydrogen VS Electric Cars
          </a>
          <p className="subtitle">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="news-links">
          <a href="" className="news-link">
            The Downsides of AI Artistry
          </a>
          <p className="subtitle">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="news-links">
          <a href="" className="news-link">
            Is VC Funding Drying Up?
          </a>
          <p className="subtitle">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Principal;
