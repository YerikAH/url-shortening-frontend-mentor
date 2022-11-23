import React from "react";
import {
  NavComponent,
  NavComponentUl,
  ComponentUlLiA,
  NavComponentFirst,
  NavComponentSecond,
  ComponentUlLi,
  Logo,
  SeparatorNav,
  ComponentUlLiASpecial,
  HamButton,
  HamButtonImg,
} from "../styles/header-styles";
import logo from "../assets/logo.svg";
import ham from "../assets/";
export default function Header() {
  return (
    <NavComponent>
      <SeparatorNav>
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
      </SeparatorNav>
      <SeparatorNav>
        <NavComponentUl className="none">
          <ComponentUlLi>
            <ComponentUlLiA>Login</ComponentUlLiA>
          </ComponentUlLi>
          <ComponentUlLi>
            <ComponentUlLiASpecial>Sign Up</ComponentUlLiASpecial>
          </ComponentUlLi>
        </NavComponentUl>
        <HamButton>
          <HamButtonImg src={} />
        </HamButton>
      </SeparatorNav>
    </NavComponent>
  );
}
