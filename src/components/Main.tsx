import React from "react";
import SectionOne from "./SectionOne";
import { ColorBg } from "../styles/main-styles";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
export default function Main() {
  return (
    <>
      <main>
        <SectionOne></SectionOne>
        <ColorBg>
          <SectionTwo></SectionTwo>
          {/* <SectionThree></SectionThree> */}
        </ColorBg>
      </main>
    </>
  );
}
