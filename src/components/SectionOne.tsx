import React from "react";
import {
  SectionApp,
  SectionGridOne,
  GridOneResponsive,
  GridOneResponsiveImage,
  SectionGridTwo,
  SectionGridTwoTitle,
  SectionGridTwoText,
  SectionGridTwoButton,
  SectionGrid,
} from "../styles/sectionone-styles";

export default function SectionOne() {
  return (
    <SectionApp>
      <SectionGrid>
        <SectionGridOne>
          <GridOneResponsive>
            <GridOneResponsiveImage></GridOneResponsiveImage>
          </GridOneResponsive>
        </SectionGridOne>
        <SectionGridTwo>
          <SectionGridTwoTitle>
            More than just shorter links
          </SectionGridTwoTitle>
          <SectionGridTwoText>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </SectionGridTwoText>
          <SectionGridTwoButton>Get Started</SectionGridTwoButton>
        </SectionGridTwo>
      </SectionGrid>
    </SectionApp>
  );
}
