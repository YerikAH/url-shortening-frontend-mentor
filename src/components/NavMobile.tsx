import React from "react";
import ReactDOM from "react-dom";
import {
  AllNavApp,
  NavApp,
  NavAppUl,
  NavAppUlLi,
  NavAppUlLiA,
  SeparatorDiv,
  NavAppUlLiButton,
} from "../styles/navmobile-styles";
export default function NavMobile() {
  const $modal = document.getElementById("modal")!;
  return ReactDOM.createPortal(
    <AllNavApp>
      <NavApp>
        <NavAppUl>
          <NavAppUlLi>
            <NavAppUlLiA>Features</NavAppUlLiA>
          </NavAppUlLi>
          <NavAppUlLi>
            <NavAppUlLiA>Pricing</NavAppUlLiA>
          </NavAppUlLi>
          <NavAppUlLi>
            <NavAppUlLiA>Resources</NavAppUlLiA>
          </NavAppUlLi>
        </NavAppUl>
        <SeparatorDiv></SeparatorDiv>
        <NavAppUl>
          <NavAppUlLi>
            <NavAppUlLiA>Login</NavAppUlLiA>
          </NavAppUlLi>
          <NavAppUlLi>
            <NavAppUlLiButton>Sign Up</NavAppUlLiButton>
          </NavAppUlLi>
        </NavAppUl>
      </NavApp>
    </AllNavApp>,
    $modal
  );
}
