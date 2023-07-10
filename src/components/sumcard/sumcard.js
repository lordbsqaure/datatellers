import "./sumcard.css";
import React from "react";

const Sumcard = (props) => {
  return (
    <>
      <div className="onecard" style={{ background: props.bcolor }}>
        <div className="status"> {props.status} </div>{" "}
        <div className="number" style={{ color: props.ncolor }}>
          {" "}
          {props.number}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Sumcard;
