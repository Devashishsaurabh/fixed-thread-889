import axios from "axios";
import React from "react";
import Button from "../Components/Home/Button";
import Header from "../Components/Home/Header";
import Free from "../Components/HomeSections/Free";
import Rating from "../Components/HomeSections/Rating";
import Support from "../Components/HomeSections/Support";
import Track from "../Components/HomeSections/Track";
import Tracking from "../Components/HomeSections/Tracking";
import ImageBar from "../Components/Home/ImageBar";
import Management from "../Components/Home/Management";
import TimeKeeping from "../Components/Home/TimeKeeping";
import Blue from "../Components/Home/Blue";
import App from "../Components/Home/App";
import Auto from "../Components/Home/Auto";
import Os from "../Components/Home/Os";
import Reporting from "../Components/Home/Reporting";
import Approval from "../Components/Home/Approval";

const Home = () => {
  return (
    <div>
      <Header />
      <Button />
      <ImageBar />
      <Management />
      <TimeKeeping />
      <Reporting />
      <Approval />
      <Blue />
      <App />
      <Auto />
      <Os />
      <Track />
      <Free />
      <Support />
      <Rating />
      <Tracking />
    </div>
  );
};

export default Home;
