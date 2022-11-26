import React from "react";
import {
  DivSectionThree,
  SectionThreeFirst,
  SectionThreeTitle,
  SectionThreeDescription,
  SectionThreeSecond,
  STSecondBox,
  STSecondBoxCircleImage,
  STSecondBoxCircle,
  STSecondBoxTitle,
  STSecondBoxDescription,
  LineDecorationMobile,
} from "../styles/sectionthree-styles";
import recognition from "../assets/icon-brand-recognition.svg";
import record from "../assets/icon-detailed-records.svg";
import customizable from "../assets/icon-fully-customizable.svg";

export default function SectionThree() {
  return (
    <DivSectionThree>
      <SectionThreeFirst>
        <SectionThreeTitle>Advanced Statistics</SectionThreeTitle>
        <SectionThreeDescription>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </SectionThreeDescription>
      </SectionThreeFirst>
      <SectionThreeSecond>
        <STSecondBox>
          <STSecondBoxCircle>
            <STSecondBoxCircleImage src={recognition} />
          </STSecondBoxCircle>
          <STSecondBoxTitle>Brand Recognition</STSecondBoxTitle>
          <STSecondBoxDescription>
            Boost your brand recognition with each click. Generic links don't
            mean a thins. Branded links help instil confidence in your content.
          </STSecondBoxDescription>
        </STSecondBox>
        <STSecondBox>
          <STSecondBoxCircle>
            <STSecondBoxCircleImage src={record} />
          </STSecondBoxCircle>
          <STSecondBoxTitle>Detailed Records</STSecondBoxTitle>
          <STSecondBoxDescription>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </STSecondBoxDescription>
        </STSecondBox>
        <STSecondBox>
          <STSecondBoxCircle>
            <STSecondBoxCircleImage src={customizable} />
          </STSecondBoxCircle>
          <STSecondBoxTitle>Fully Customizable</STSecondBoxTitle>
          <STSecondBoxDescription>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </STSecondBoxDescription>
        </STSecondBox>
        <LineDecorationMobile></LineDecorationMobile>
      </SectionThreeSecond>
    </DivSectionThree>
  );
}
