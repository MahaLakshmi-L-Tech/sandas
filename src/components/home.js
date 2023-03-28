import React from "react";
import connect from "./assets/images/Connect.png";
import { BsArrowReturnRight } from "react-icons/bs";
import progressbar from "./assets/images/progressbar.png";
import card from "./assets/images/card.png";
import google from "./assets/images/google.png";
import walmart from "./assets/images/walmart.png";
import fedex from "./assets/images/fedex.png";
import airbnb from "./assets/images/airbnb.png";
import microsoft from "./assets/images/microsoft.png";
import hubspot from "./assets/images/hubspot.jpg";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="homeImg">
          <div className="home">
            <div className="homeWork">
              <h2 style={{ color: "green" }}> Let's Create </h2>
              <h4>
                <u style={{ color: "green" }}>at</u>
              </h4>
            </div>

            <h2 className="ideas">New Ideas</h2>

            <div className="withYou">
              <h4>
                <u style={{ color: "green" }}> with</u>
              </h4>
              <h2 style={{ color: "green" }}>You</h2>
            </div>
            <div className="textarrow">
              <BsArrowReturnRight size={"60px"} className="arrowicon" />
              <h6 className="text">
                We invent and build game-changing digital products and
                services.Our mission is to put digital at services of the major
                challenges of the 21st century
              </h6>
            </div>
          </div>

          <img src={connect} className="imageSize" alt=" not found" />
        </div>
      </div>
      <div className="buttonholder">
        <div className="buttonholder1"></div>

        <p className="request">Request for Demo</p>

        <div className="buttonholder2"></div>
      </div>
      <div className="cardProgress">
        <img src={progressbar} className="progressbarSize" alt=" not found" />
        <img src={card} className="cardSize" alt=" not found" />
      </div>
      <div className="textprogressalign">
        <h4>We Sprinted Together</h4>
        <div className="textprogressalignbuttonholder"></div>
        <h6 className="text">
          We are facing new challenges of a new scale.Every organization has the
          absolute need to transform in order to provide useful response.
        </h6>
        <div className="wesitelinks">
          <img src={airbnb} className="airbnb" alt=" not found" />
          <img src={hubspot} className="googlesize" alt=" not found" />
          <img src={google} className="googlesize" alt=" not found" />
          <img src={microsoft} className="microsoft" alt=" not found" />
          <img src={walmart} className="googlesize" alt=" not found" />
          <img src={fedex} className="fedexsize" alt=" not found" />
        </div>
      </div>
    </>
  );
};

export default Home;
