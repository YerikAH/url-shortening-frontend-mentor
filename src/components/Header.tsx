import React from "react";
import {
  NavComponent,
  NavComponentUl,
  ComponentUlLiA,
  NavComponentFirst,
  NavComponentSecond,
  ComponentUlLi,
  Logo,
} from "../styles/header-styles";
import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <NavComponent>
      <NavComponentFirst>
        <Logo src={logo} />
      </NavComponentFirst>
      <NavComponentSecond>
        <NavComponentUl>
          <ComponentUlLi>
            <ComponentUlLiA>Features</ComponentUlLiA>
          </ComponentUlLi>
          <ComponentUlLi>
            <ComponentUlLiA>Pricing</ComponentUlLiA>
          </ComponentUlLi>
          <ComponentUlLi>
            <ComponentUlLiA>Resources</ComponentUlLiA>
          </ComponentUlLi>
        </NavComponentUl>
      </NavComponentSecond>
    </NavComponent>
  );
}
