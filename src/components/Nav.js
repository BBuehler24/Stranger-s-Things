import React from "react";
import { NavLink } from "react-router-dom";
import { useNav } from "../hooks";

export default function Nav() {
  const { linkProps, navLinks } = useNav();

  return (
    <div>
      {navLinks.map(({ name, icon, to }, idx) => (
        <NavLink key={idx} {...linkProps(name, to)}>

        </NavLink>
      ))}
      </div>
  );
}