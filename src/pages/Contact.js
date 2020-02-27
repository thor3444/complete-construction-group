import React from "react";
import { Message } from "../components/Message";
import { Map } from "../components/Map";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 250px;
  }

  @media (min-width: 992px) {
    margin-top: 125px;
  }
`;

export const Contact = () => {
  return (
    <Wrapper>
      <Message dark={false} />
      <Map />
    </Wrapper>
  );
};
