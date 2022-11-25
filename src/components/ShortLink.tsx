import React from "react";
import { PropsR } from "../interfaces/interface";
import {
  ShortLinkOriginal,
  ShortLinkBox,
  ShortLinkShort,
  ShortLinkButton,
} from "../styles/shortlink-styles";

export default function ShortLink({ urlOriginal, urlShort }: PropsR) {
  return (
    <ShortLinkBox>
      <ShortLinkOriginal>{urlOriginal}</ShortLinkOriginal>
      <ShortLinkShort id="url">{urlShort}</ShortLinkShort>
      <ShortLinkButton
        data-clipboard-action="copy"
        data-clipboard-target="#url"
      >
        Copy
      </ShortLinkButton>
    </ShortLinkBox>
  );
}
