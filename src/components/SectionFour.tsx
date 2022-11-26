import React from "react";
import {
  SectionFourJust,
  SectionFourDiv,
  SectionFourDivImage,
  SFDButton,
  SFDText,
} from "../styles/sectionfour-styles";

export default function SectionFour() {
  return (
    <SectionFourJust>
      <SectionFourDivImage></SectionFourDivImage>
      <SectionFourDiv>
        <SFDText>Bosst your links today</SFDText>
        <SFDButton>Get Started</SFDButton>
      </SectionFourDiv>
    </SectionFourJust>
  );
}
