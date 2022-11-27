import React from "react";
import SectionOne from "./SectionOne";
import { ColorBg, MainComponent } from "../styles/main-styles";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import { PropsMain } from "../interfaces/interface";
export default function Main({ mobile }: PropsMain) {
  return (
    <>
      <MainComponent>
        <SectionOne></SectionOne>
        {!mobile && (
          <>
            <ColorBg>
              <SectionTwo></SectionTwo>
              <SectionThree></SectionThree>
            </ColorBg>
            <SectionFour></SectionFour>
          </>
        )}
      </MainComponent>
    </>
  );
}
