import React from "react";
import Lottie from "react-lottie";
import animation from "./notfound.json";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div style={{ height: "90vh" }}>
      <Lottie
        style={{ height: "90%", width: "50%" }}
        options={defaultOptions}
      />
    </div>
  );
};

export default NotFound;
