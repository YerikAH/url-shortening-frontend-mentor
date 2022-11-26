import React from "react";
import {
  FooterComponent,
  FComponent,
  FComponentLogo,
  FComponentTitle,
  FComponentUl,
  FComponentUlLi,
  FComponentUlLiA,
  FComponentFather,
} from "../styles/footer-styles";
import logoWhite from "../assets/logo-white.svg";
export default function Footer() {
  return (
    <FooterComponent>
      <FComponentFather>
        <FComponent>
          <FComponentLogo src={logoWhite} />
        </FComponent>
        <FComponent>
          <FComponentTitle>Features</FComponentTitle>
          <FComponentUl>
            <FComponentUlLi>
              <FComponentUlLiA>Link Shortening</FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA>Branded Links</FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA>Analytics</FComponentUlLiA>
            </FComponentUlLi>
          </FComponentUl>
        </FComponent>
        <FComponent>
          <FComponentTitle>Resources</FComponentTitle>
          <FComponentUl>
            <FComponentUlLi>
              <FComponentUlLiA>Blog</FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA>Developers</FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA>Support</FComponentUlLiA>
            </FComponentUlLi>
          </FComponentUl>
        </FComponent>
        <FComponent>
          <FComponentTitle>Company</FComponentTitle>
          <FComponentUl>
            <FComponentUlLi>
              <FComponentUlLiA>About</FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA>Our Team</FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA>Careers</FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA>Contact</FComponentUlLiA>
            </FComponentUlLi>
          </FComponentUl>
        </FComponent>
        <FComponent>
          <FComponentUl>
            <FComponentUlLi>
              <FComponentUlLiA></FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA></FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA></FComponentUlLiA>
            </FComponentUlLi>
            <FComponentUlLi>
              <FComponentUlLiA></FComponentUlLiA>
            </FComponentUlLi>
          </FComponentUl>
        </FComponent>
      </FComponentFather>
    </FooterComponent>
  );
}
