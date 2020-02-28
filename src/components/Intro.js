import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "./Container";
import eye from "../img/icons/eye.svg";
import list from "../img/icons/list.svg";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  padding: 5rem 0;

  h2 {
    color: rgb(188, 55, 55);
    margin: 0 0 1rem 0;
    font-size: 2rem;
    text-align: center;
  }

  p {
    color: rgb(1, 22, 39);
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

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;

    & > div {
      align-items: flex-start;
    }

    h2,
    p {
      text-align: left;
    }
  }
`;

export const Intro = () => {
  return (
    <Container>
      <Layout>
        <div>
          <h2>About Us</h2>
          <p>
            Complete Construction Group is owned and managed by Camren Mofford.
            We have over 8 years of experience providing our clients with
            exceptional remodeling services for every part of their home.
          </p>
          <Link to="/our_work">
            <img src={eye} alt="Eye" className="icon" />
            View Our Work
          </Link>
        </div>
        <div>
          <h2>What We Do</h2>
          <p>
            We offer remodeling services in the Cincinnati and Florence area.
            You can count on us to give new life to all areas of your home
            including your kitchen, bathroom, basement, and even your outdoor
            living space. We get things done the right way in a timely manner
            while staying within your budget.
          </p>
          <Link to="/services">
            <img src={list} alt="List" className="icon" />
            Browse Services
          </Link>
        </div>
      </Layout>
    </Container>
  );
};
