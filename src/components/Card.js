import React from "react";
import "./Card.scss";

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
