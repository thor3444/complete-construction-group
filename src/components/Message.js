import React from "react";
import styled from "styled-components";
import { Container } from "./Container";

const Wrapper = styled.div`
  background-color: ${props => (props.dark ? "rgb(188, 55, 55)" : "white")};
  padding: 5rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;

  h2 {
    color: ${props => (props.dark ? "white" : "rgb(188, 55, 55)")};
    margin: 0 0 1rem 0;
    font-size: 2rem;
    text-align: center;
  }

  h3 {
    color: ${props => (props.dark ? "white" : "rgb(1, 22, 39)")};
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    color: rgb(1, 22, 39);
    font-size: 1rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    .group {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 1rem;
    }

    label {
      color: rgb(1, 22, 39);
      font-size: 0.8rem;
    }

    input,
    textarea {
      border: 0;
      border-radius: 0.2rem;
      padding: 0.5rem;
      font-size: 1rem;
      margin-top: 0.2rem;
      margin-bottom: 1rem;
      background-color: ${props => (props.dark ? "white" : "#e3e3e3")};
      resize: vertical;
    }

    button {
      border: 0;
      color: ${props => (props.dark ? "rgb(188, 55, 55)" : "white")};
      text-decoration: none;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      padding: 1rem 2rem;
      border-radius: 2rem;
      min-width: 200px;
      margin-bottom: 0.5rem;
      cursor: pointer;
      background-color: ${props => (props.dark ? "white" : "rgb(188, 55, 55)")};
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background: rgb(201, 69, 69);
        color: white;
      }

      .icon {
        height: 1.2rem;
        margin-right: 0.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }

    form .group {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    h2,
    h3,
    p {
      text-align: left;
    }
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem;
  align-items: center;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Message = ({ dark }) => {
  return (
    <Wrapper dark={dark}>
      <Container>
        <Layout>
          <div>
            <h2>{dark ? "Let's Get Started" : "Reach Out Today"}</h2>
            <h3>We will turn your dreams into a reality</h3>
            <p>Send us a message or give us a call at (513) 828-5801</p>
          </div>
          <form>
            <label htmlFor="first">Name</label>
            <div className="group">
              <input type="text" id="first" placeholder="First" required />
              <input type="text" id="last" placeholder="Last" required />
            </div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="987-654-3210" required />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="icon"
                fill="currentColor"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
              Send Message
            </button>
          </form>
        </Layout>
      </Container>
    </Wrapper>
  );
};
