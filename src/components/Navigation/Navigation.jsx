import React from "react";
import "./Navigation.css";
import Nav from "../buttons/Nav/Nav";

const Navigation = () => {
  const navs = [
    {
      name: "Requirements",
      color: "#f44336",
      to: "/"
    },
    {
      name: "Office leaders",
      color: "#2196F3",
      to: "/office-leaders"
    },
    {
      name: "Rail loads",
      color: "#4CAF50",
      to: "/rail-loads"
    },
    {
      name: "Invoicing",
      color: "#ff9900",
      to: "https://vrubliuk.github.io/invoicing/"
    }
  ].map((nav, i) => {
    return (
      <Nav color={nav.color} to={nav.to} key={i}>
        {nav.name}
      </Nav>
    );
  });

  return <div className="Navigation">{navs}</div>;
};

export default Navigation;
