import React from "react";
import styled from "styled-components";

import tools from "../img/icons/tools.svg";
import light from "../img/icons/light.svg";
import clock from "../img/icons/clock-dark.svg";
import handshake from "../img/icons/handshake.svg";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 7rem 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: rgb(188, 55, 55);
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    color: rgb(1, 22, 39);
    font-size: 1rem;
    text-align: center;
  }

  img {
    height: 5rem;
  }
`;

export const Features = () => {
  return (
    <Layout>
      <Item>
        <img src={tools} alt="Tools" />
        <h3>General Remodeling</h3>
        <p>
          We specialize in any indoor or outdoor remodeling including flooring,
          framing, additions, tile, concrete, drywall, and more.
        </p>
      </Item>
      <Item>
        <img src={light} alt="Light Bulb" />
        <h3>Bring Your Ideas To Life</h3>
        <p>
          You should be happy with the place you live. Take the step to love
          your home.
        </p>
      </Item>
      <Item>
        <img src={clock} alt="Clock" />
        <h3>Timely & Affordable</h3>
        <p>We get the job done quick at competitive market prices.</p>
      </Item>
      <Item>
        <img src={handshake} alt="Handshake" />
        <h3>Trusted</h3>
        <p>
          We maintain the highest levels of professionalism and integrity with
          our clients.
        </p>
      </Item>
    </Layout>
  );
};
