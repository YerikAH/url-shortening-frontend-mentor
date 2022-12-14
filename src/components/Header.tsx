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
  HeaderComponent,
} from "../styles/header-styles";
import logo from "../assets/logo.svg";
import ham from "../assets/ham.svg";
import { PropsHeader } from "../interfaces/interface";
export default function Header({ mobile, handleMobile }: PropsHeader) {
  function openMenu() {
    if (mobile) {
      handleMobile(false);
    } else {
      handleMobile(true);
    }
  }

  return (
    <HeaderComponent>
      <NavComponent>
        <SeparatorNav>
          <NavComponentFirst>
            <Logo src={logo} alt="logo" />
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
            <HamButtonImg src={ham} alt="open menu" onClick={openMenu} />
          </HamButton>
        </SeparatorNav>
      </NavComponent>
    </HeaderComponent>
  );
}
