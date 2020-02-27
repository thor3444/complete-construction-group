import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/Container";

import arrow from "../img/icons/arrow.svg";

import bath from "../img/bath.jpg";
import flooring from "../img/flooring.jpg";
import decking from "../img/decking.jpg";
import tile from "../img/tile.jpg";
import patios from "../img/patios.jpg";
import kitchen from "../img/kitchen.jpg";
import fencing from "../img/fencing.jpg";
import framing from "../img/framing.jpg";
import concrete from "../img/concrete.jpg";
import drywall from "../img/drywall.jpg";

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

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    grid-gap: 3rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.source});
  background-size: cover;
  background-position: center;
  min-height: 300px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    color: rgb(1, 22, 39);
    margin: 0;
    text-align: center;
  }

  p {
    color: rgb(1, 22, 39);
    font-size: 1rem;
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
    align-items: flex-start;
    h2,
    p {
      text-align: left;
    }
  }
`;

export const Services = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Our Services</h1>
        <List>
          <Item>
            <Image source={kitchen} />
            <Content>
              <h2>Kitchen Remodeling</h2>
              <p>
                Whether you are looking for a sleek modern look or a rustic
                homely fee, We will help you create the perfect kitchen of your
                dreams.
              </p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
          <Item>
            <Image source={bath} />
            <Content>
              <h2>Bathroom Remodeling</h2>
              <p>
                We can bring life back to your bathroom with new plumbing,
                electrical, lighting, tile, and cabinetry.
              </p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
          <Item>
            <Image source={flooring} />
            <Content>
              <h2>Flooring</h2>
              <p>
                Make your home feel a little more elegant with hard wood and
                tile flooring.
              </p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
          <Item>
            <Image source={decking} />
            <Content>
              <h2>Decking</h2>
              <p>
                Create the perfect outdoor living space that's sure to leave a
                lasting impression.
              </p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
          <Item>
            <Image source={tile} />
            <Content>
              <h2>Tile</h2>
              <p>Add a little bit of stone accents anywhere in your home.</p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
          <Item>
            <Image source={patios} />
            <Content>
              <h2>Patios</h2>
              <p>
                Create the perfect outdoor living space without the maintance of
                wooden decks.
              </p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
          <Item>
            <Image source={fencing} />
            <Content>
              <h2>Fencing</h2>
              <p>Create privacy or add some asthenics to your yard.</p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
          <Item>
            <Image source={framing} />
            <Content>
              <h2>Framing & Additions</h2>
              <p>We can help you create a new living area for your home.</p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
          <Item>
            <Image source={drywall} />
            <Content>
              <h2>Drywall</h2>
              <p>We can help you change up your floor plan.</p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
          <Item>
            <Image source={concrete} />
            <Content>
              <h2>Concrete & More</h2>
              <p>Want to add some stone masonry to your landscape?</p>
              <Link to="/contact">
                <img src={arrow} alt="Arrow" className="icon" />
                Get Started
              </Link>
            </Content>
          </Item>
        </List>
      </Container>
    </Wrapper>
  );
};
