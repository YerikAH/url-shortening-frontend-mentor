import React from "react";
import {
  ShortLinkOriginal,
  ShortLinkBox,
  ShortLinkShort,
  ShortLinkButton,
} from "../styles/shortlink-styles";
export default function ShortLink() {
  return (
    <ShortLinkBox>
      <ShortLinkOriginal>www.youtube.com</ShortLinkOriginal>
      <ShortLinkShort>https://rel.ink/a2rda2w</ShortLinkShort>
      <ShortLinkButton>Copy</ShortLinkButton>
    </ShortLinkBox>
  );
}
