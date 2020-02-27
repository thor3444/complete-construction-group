import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/Container";
import construction from "../img/construction.svg";
import back from "../img/icons/back.svg";

const Wrapper = styled.div`
  padding: 2rem 0;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: rgb(188, 55, 55);
    font-size: 2rem;
    /* text-align: center; */
    margin: 0;
  }

  h2 {
    color: rgb(1, 22, 39);
    /* text-align: center; */
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

    &:hover {
      background: rgb(201, 69, 69);
    }

    .icon {
      height: 1.2rem;
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 250px;

    h1 {
      font-size: 3rem;
    }

    h2 {
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

  img#illistration {
    width: 100%;
    height: auto;
    margin: 4rem;
    max-width: 600px;
  }
`;

export const NotFound = () => {
  return (
    <Wrapper>
      <Container>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/">
          <img src={back} alt="Tag" className="icon" />
          Back To Home
        </Link>
        <img src={construction} alt="Construction Building" id="illistration" />
      </Container>
    </Wrapper>
  );
};
