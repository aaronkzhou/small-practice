import React, { useEffect } from "react";

const Home = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Menu");
  });

  return "This is menu content";
};

export default Home;
