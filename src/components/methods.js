import React from "react";
import motto from "./assets/images/motto.png";
import bugetgraph from "./assets/images/bugetgraph.png";

const Methods = () => {
  return (
    <>
      <div className="mthodsContainer">
        <div className="methods">
          <img src={motto} className="imgsize" alt=" not found" />
          <div className="methodsmessage ">
            <h4>Test your </h4>
            <div className="textareamessage">
              <h4 style={{ color: "green" }}>idea</h4>
              <h6
                style={{
                  marginRight: "10px",
                  marginLeft: "10px",
                  color: "green",
                }}
              >
                <u>at</u>
              </h6>
              <h4 style={{ color: "green" }}>1 week</h4>
            </div>
            <p style={{ color: "black", marginLeft: "50px" }}>
              Every Organization has its greatest challenges Each project leader
              has their wildest dreams
            </p>
            <h2 className="textmessageideas">Dive into sendas</h2>
          </div>
        </div>
        <div className="methods">
          <div className="methodsmessage ">
            <div className="methodsmessage1">
              <h6 style={{ marginRight: "10px" }}>
                <u>at</u>
              </h6>
              <h4>Tribe called</h4>
            </div>
            <h4 style={{ marginLeft: "30px", color: "green" }}>Sendas</h4>

            <p style={{ color: "black", marginLeft: "50px" }}>
              A tribe of enthusiasts driven by the desire to learn on daily
              basis and put their talents at service
            </p>
            <h2 className="textmessageideas">Say Hello!</h2>
          </div>
          <img src={bugetgraph} className="imgsize" alt=" not found" />
        </div>
      </div>
    </>
  );
};
export default Methods;
