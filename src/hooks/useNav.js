import { useContext } from "react";

const loggedOutLinks = [
  {
    name: "Home",
    icon: "",
    to: "/home",
  },
  {
    name: "Login",
    icon: "",
    to: "/login",
  },
  {
    name: "Signup",
    icon: "",
    to: "/signup",
  },
];

const loggedInLinks = [
  {
    name: "Home",
    icon: "home",
    to: "/home",
  },
  {
    name: "Logout",
    icon: "logout",
  },
];

export function useNav() {
  const { isLoggedIn, updateAuthStatus } = useContext;
  const navLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  const linkProps = (name, to) => ({
    activeClassName: to ? "active" : null,
    to: name === "Logout" ? "/home" : to,
    onClick: name === "Logout"
  });

  return { linkProps, navLinks };
}