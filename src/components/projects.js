import React from "react";
import sendascards from "./assets/images/sendascards.png";
import "./assets/css/home.css";

const Projects = () => {
  return (
    <>
      <div className="projectContainer">
        <div className="textarea">
          <h6>Want to test our Services?</h6>
          <div className="textareamessage">
            <h4>Let's give life </h4>
            <h6 style={{ marginLeft: "10px", marginRight: "10px" }}>
              <u style={{ color: "orange" }}>at</u>
            </h6>
            <h4>Your</h4>
          </div>

          <h2 className="amazingideas">Amazing Ideas</h2>
        </div>
        <img src={sendascards} className="sendascardsimage" alt=" not found" />
        <div className="bottomarea">
          <p className="bottomareamessage">
            <b>Quickly Realize</b> the design of the digital solution via a
            10-day sprint with the help of 3 Products design experts.Remotly or
            in your office,start your project in the best possible way with a
            one day discovery workshop
          </p>
        </div>
      </div>
    </>
  );
};
export default Projects;
