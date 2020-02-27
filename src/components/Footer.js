import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import styled from "styled-components";

import marker from "../img/icons/marker.svg";
import envelope from "../img/icons/envelope.svg";
import phone from "../img/icons/phone.svg";
import icon from "../img/icons/icon.svg";
import rk from "../img/icons/rk.svg";
import facebook from "../img/icons/facebook.svg";

const Foot = styled.footer`
  background-color: rgb(1, 22, 39);
  color: white;
  font-size: 1rem;
  padding: 2rem 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 1rem;
    justify-items: center;

    li {
      display: flex;
      align-items: center;
      white-space: nowrap;

      img {
        height: 1.2rem;
        margin-right: 0.5rem;
      }
    }
  }

  #share {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }

    img {
      height: 2.5rem;
      margin-right: 0.5rem;
    }
  }

  #rk {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }

    img {
      height: 2.5rem;
      margin-right: 0.5rem;
    }
  }

  #links {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    #links {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: space-around;
    }
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 2rem;
`;

export const Footer = () => {
  return (
    <Foot>
      <Container>
        <Layout>
          <ul>
            <li>
              <img src={marker} alt="Map Marker" />
              Cincinnati & Florence Area
            </li>
            <li>
              <img src={envelope} alt="Email" />
              camrenworkemail@gmail.com
            </li>
            <li>
              <img src={phone} alt="Phone" />
              (513) 828-5801
            </li>
          </ul>
          <div id="links">
            <a
              href="https://www.facebook.com/camren.mofford.9"
              target="_blank"
              rel="noopener noreferrer"
              id="share"
            >
              <img src={facebook} alt="Facebook" />
              Facebook
            </a>
            <a
              href="https://raymondkneipp.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="rk"
            >
              <img src={rk} alt="Raymond Kneipp" />
              Web Design
            </a>
          </div>
          <Link to="/">
            <img src={icon} alt="Complete Construction Group" />
          </Link>
        </Layout>
      </Container>
    </Foot>
  );
};
