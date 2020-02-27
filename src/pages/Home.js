import React from "react";
import { Landing } from "../components/Landing";
import { Intro } from "../components/Intro";
import { Map } from "../components/Map";
import { Features } from "../components/Features";
import { Message } from "../components/Message";

export const Home = () => {
  return (
    <>
      <Landing />
      <Intro />
      <Map />
      <Features />
      <Message dark={true} />
    </>
  );
};
