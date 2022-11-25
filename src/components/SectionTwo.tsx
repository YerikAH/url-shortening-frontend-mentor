import React from "react";
import {
  DivSectionTwo,
  DivSectionTwoBox,
  DivSectionTwoBoxImage,
  DivSectionTwoBoxLogic,
  SectionTwoBoxButton,
  SectionTwoBoxInput,
  AllShortLinks,
} from "../styles/sectiontwo-styles";
import ShortLink from "./ShortLink";
export default function SectionTwo() {
  return (
    <DivSectionTwo>
      <DivSectionTwoBox>
        <DivSectionTwoBoxImage></DivSectionTwoBoxImage>
        <DivSectionTwoBoxLogic>
          <SectionTwoBoxInput placeholder="Shorten a link here..." />
          <SectionTwoBoxButton>Shorten It!</SectionTwoBoxButton>
        </DivSectionTwoBoxLogic>
      </DivSectionTwoBox>
      <AllShortLinks>
        <ShortLink />
        <ShortLink />
      </AllShortLinks>
    </DivSectionTwo>
  );
}
