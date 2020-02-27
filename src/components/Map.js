import React from "react";
import styled from "styled-components";

import marker from "../img/icons/marker.svg";
import phone from "../img/icons/phone.svg";
import envelope from "../img/icons/envelope.svg";
import clock from "../img/icons/clock.svg";
import map from "../img/map.png";

const Wrapper = styled.div`
  background: rgb(188, 55, 55);
  padding: 2rem 0 0;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  place-items: center center;

  @media (min-width: 992px) {
    padding: 0;
    grid-template-columns: 1fr 2fr;
  }
`;

const Image = styled.div`
  background-image: url(${map});
  background-size: cover;
  background-position: center;
  min-height: 500px;
  width: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: fit-content(100px) fit-content(400px);
  grid-gap: 1rem;

  h4 {
    color: white;
    font-size: 1rem;
    margin: 0;
  }

  p {
    color: white;
    font-size: 1rem;
    margin: 0;
  }

  img {
    height: 1.4rem;
  }
`;

export const Map = () => {
  return (
    <Wrapper>
      <Content>
        <img src={marker} alt="Map Marker" />
        <div>
          <h4>Location</h4>
          <p>Cincinnati & Florence Area</p>
        </div>

        <img src={phone} alt="Phone" />
        <div>
          <h4>Phone</h4>
          <p>(513) 828-5801</p>
        </div>

        <img src={envelope} alt="Envelope" />
        <div>
          <h4>Email</h4>
          <p>camrenworkemail@gmail.com</p>
        </div>

        <img src={clock} alt="Clock" />
        <div>
          <h4>Hours</h4>
          <p>Mo: 8:00 am - 6:00 pm</p>
          <p>Tu: 8:00 am - 6:00 pm</p>
          <p>We: 8:00 am - 6:00 pm</p>
          <p>Th: 8:00 am - 6:00 pm</p>
          <p>Fr: 8:00 am - 6:00 pm</p>
          <p>Sa: 8:00 am - 6:00 pm</p>
          <p>Su: 8:00 am - 6:00 pm</p>
        </div>
      </Content>
      <Image />
    </Wrapper>
  );
};
