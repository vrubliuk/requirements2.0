import React from "react";
import "./Navigation.css";
import Nav from "../buttons/Nav/Nav";

const Navigation = () => {
  const navs = [
    {
      name: "Requirements",
      to: "/",
    },
    {
      name: "Agent 1.0",
      to: "/agent",
    },
    {
      name: "Offices",
      to: "/offices",
    },
    {
      name: "Rail loads",
      to: "/rail-loads",
    },
    {
      name: "Invoicing",
      to: "https://vrubliuk.github.io/invoicing/",
    },
  ].map((nav, i) => {
    return (
      <Nav to={nav.to} key={i}>
        {nav.name}
      </Nav>
    );
  });

  return <div className="Navigation">{navs}</div>;
};

export default Navigation;
