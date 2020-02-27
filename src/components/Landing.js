import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "./Container";
import bg from "../img/brick.jpg";
import tag from "../img/icons/tag.svg";

const Background = styled.header`
  background-image: url(${bg});
  background-size: cover;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: rgb(188, 55, 55);
    font-size: 2.5rem;
    text-align: center;
    margin: 0 0 1rem 0;
  }

  h2 {
    color: rgb(1, 22, 39);
    font-weight: normal;
    font-size: 1.5rem;
    max-width: 400px;
    margin: 0 0 2rem 0;
    text-align: center;
  }

  a {
    background: rgb(188, 55, 55);
    text-decoration: none;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background: rgb(201, 69, 69);
    }

    .icon {
      height: 1.2rem;
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    padding-top: 100px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-size: 3rem;
      text-align: left;
    }

    h2 {
      text-align: left;
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;

export const Landing = () => {
  return (
    <Background>
      <Container>
        <h1>
          Complete
          <br />
          Construction Group
        </h1>
        <h2>Devoted to exceptional remodeling at a bargain.</h2>
        <Link to="/contact">
          <img src={tag} alt="Tag" className="icon" />
          Get A Free Quote
        </Link>
      </Container>
    </Background>
  );
};
