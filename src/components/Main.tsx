import React from "react";
import SectionOne from "./SectionOne";
import { ColorBg, MainComponent } from "../styles/main-styles";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
export default function Main() {
  return (
    <>
      <MainComponent>
        <SectionOne></SectionOne>
        <ColorBg>
          <SectionTwo></SectionTwo>
          <SectionThree></SectionThree>
        </ColorBg>
      </MainComponent>
    </>
  );
}
