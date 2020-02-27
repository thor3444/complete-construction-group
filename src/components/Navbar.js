import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import logo from "../img/icons/logo.svg";
import { Container } from "./Container";

const Nav = styled.nav`
  background: rgb(188, 55, 55);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    color: white;
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

    &.item:hover {
      background: rgb(201, 69, 69);
      color: white;
    }

    &.active {
      background: white !important;
      color: rgb(188, 55, 55) !important;

      .icon {
        color: rgb(188, 55, 55);
        fill: currentColor;
      }
    }

    .icon {
      height: 1.2rem;
      margin-right: 0.5rem;
    }
  }

  #logo {
    order: -1;
    margin: 1rem 0;
    padding: 0;
    border-radius: 100%;
    background: rgb(188, 55, 55);

    img {
      width: 250px;
      margin: auto;
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    & > div {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      grid-gap: 1rem;

      a {
        min-width: initial;
      }
    }

    #logo {
      order: 0;
      margin: 0;
    }
  }

  @media (min-width: 992px) {
    .group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }

    #logo {
      margin-bottom: -125px;
    }
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <Container>
        <div className="group">
          <NavLink to="/" className="item" exact>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
            </svg>
            <span>Home</span>
          </NavLink>

          <NavLink to="/our_work" className="item">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M9 12c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm5.8-7v-2h-21v15h2v-13h19zm3 2v14h-20v-14h20zm-2 2h-16v10h16v-10z" />
            </svg>
            <span>Our Work</span>
          </NavLink>
        </div>

        <Link to="/" id="logo">
          <img src={logo} alt="Complete Construction Group" />
        </Link>

        <div className="group">
          <NavLink to="/services" className="item">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M20.753 23c-.868 0-1.684-.338-2.297-.951l-10.602-11.174-.607.652-1.929 1.93-5.318-5.32 2.51-2.511.683.459c.026.015.171.086.304.086.054 0 .12-.008.215-.104.195-.195.312-.471.475-.854.323-.759.765-1.801 2.174-2.861 1.19-.897 2.66-1.352 4.367-1.352 2.713 0 5.107 1.163 5.208 1.212l-.341 1.891c-1.658.166-4.558.762-3.318 2.007l10.786 11.358c.6.602.937 1.417.937 2.284s-.337 1.683-.951 2.296c-.614.614-1.429.952-2.296.952zm-9.341-11.368l8.47 9.017c.444.443 1.28.458 1.753-.013.235-.236.366-.55.366-.883 0-.333-.13-.647-.367-.884l-8.457-9.002-1.765 1.765zm-8.585-3.495l2.492 2.493.021-.022c-.138-.558-.058-1.225.524-1.806.346-.346.777-.529 1.25-.529.651 0 1.307.34 2.004 1.039l.893.893 1.766-1.767-.915-.915c-1.171-1.172-1.027-2.24-.838-2.772.246-.689.807-1.258 1.661-1.695-.312-.036-.633-.057-.958-.057-1.264 0-2.329.319-3.165.949-.98.738-1.25 1.374-1.537 2.047-.212.5-.431 1.016-.901 1.485-.45.452-1.013.69-1.627.69-.227 0-.437-.032-.623-.08l-.047.047zm13.553-.619l3.336-3.296c.169-.17.443-.168.611 0 .169.17.169.442.001.611l-3.353 3.313.866.912 3.375-3.335c.168-.169.441-.168.611.001.168.168.169.441 0 .609l-3.392 3.352 1.011 1.064 3.679-3.637c.584-.582.875-1.346.875-2.11 0-.768-.293-1.537-.88-2.125-.585-.585-1.35-.877-2.114-.877-.766 0-1.53.293-2.114.877l-3.569 3.528 1.057 1.113zm-7.233 7.65l-4.127 3.993c-.229.229-.503.407-.79.558l-.58.302-1.025 2.146.833.833 2.101-1.07.301-.58c.151-.286.347-.545.574-.774l4.091-3.958-1.378-1.45z" />
            </svg>
            <span>Services</span>
          </NavLink>

          <NavLink to="/contact" className="item">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
            <span>Contact Us</span>
          </NavLink>
        </div>
      </Container>
    </Nav>
  );
};
