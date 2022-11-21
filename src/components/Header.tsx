import React from 'react'
import {NavComponent} from "../styles/header-styles";
import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <NavComponent>
      <NavComponentFirst>
        <Logo src={logo}/>
      </NavComponentFirst>
      <NavComponentSecond>
        <NavComponentUl>
          
          <NavComponentUlLi>
            <NavComponentUlLiA>Features</NavComponentUlLiA>
          </NavComponentUlLi>
          <NavComponentUlLi>
            <NavComponentUlLiA>Pricing</NavComponentUlLiA>
          </NavComponentUlLi>
          <NavComponentUlLi>
            <NavComponentUlLiA>Resources</NavComponentUlLiA>
          </NavComponentUlLi>

        </NavComponentUl>
      </NavComponentSecond>
    </NavComponent>  


  )
}
