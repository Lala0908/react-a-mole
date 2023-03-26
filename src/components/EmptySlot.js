import React, { useEffect } from "react";
import MoleHill from "../assets/molehill.png";

export default function EmptySlot(props) {
  function setRandomSeconds(maxTime) {
    return Math.ceil(Math.random() * maxTime);
  }

  useEffect(() => {
    let randomSeconds = setRandomSeconds(5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randomSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "30vw" }} src={MoleHill} />
    </div>
  );
}