import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";

import img001 from "../img/work/001.jpg";
import img002 from "../img/work/002.jpg";
import img003 from "../img/work/003.jpg";
import img004 from "../img/work/004.jpg";
import img005 from "../img/work/005.jpg";
import img006 from "../img/work/006.jpg";
import img007 from "../img/work/007.jpg";
import img008 from "../img/work/008.jpg";
import img009 from "../img/work/009.jpg";
import img010 from "../img/work/010.jpg";
import img011 from "../img/work/011.jpg";
import img012 from "../img/work/012.jpg";
import img013 from "../img/work/013.jpg";
import img014 from "../img/work/014.jpg";
import img015 from "../img/work/015.jpg";

const Wrapper = styled.div`
  padding: 2rem 0;

  @media (min-width: 768px) {
    margin-top: 250px;
  }

  h1 {
    color: rgb(188, 55, 55);
    font-size: 2rem;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
      text-align: left;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 0;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.source});
  background-size: cover;
  background-position: center;
  min-height: 350px;

  @media (min-width: 992px) {
    &:nth-child(2) {
      grid-column: 2/4;
    }

    &:nth-child(6) {
      grid-column: 1/3;
    }

    &:nth-child(12) {
      grid-column: 2/4;
    }
  }
`;

export const Work = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Our Work</h1>
        <Grid>
          <Image source={img001} />
          <Image source={img002} />
          <Image source={img003} />
          <Image source={img004} />
          <Image source={img005} />
          <Image source={img006} />
          <Image source={img007} />
          <Image source={img008} />
          <Image source={img009} />
          <Image source={img010} />
          <Image source={img011} />
          <Image source={img012} />
          <Image source={img013} />
          <Image source={img014} />
          <Image source={img015} />
        </Grid>
      </Container>
    </Wrapper>
  );
};
