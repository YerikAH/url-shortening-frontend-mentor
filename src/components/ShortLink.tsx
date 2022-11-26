import React, { useState } from "react";
import { Props, BackgroundInterface } from "../interfaces/interface";
import deleteImage from "../assets/destroy.svg";
import { initialBackground } from "../home/initialVariables";
import {
  ShortLinkOriginal,
  ShortLinkBox,
  ShortLinkShort,
  ShortLinkButton,
  ButtonDeleteLinkImage,
  ButtonDeleteLink,
} from "../styles/shortlink-styles";

export default function ShortLink({
  idLink,
  urlOriginal,
  urlShort,
  handleDelete,
}: Props) {
  const [textCopy, setTextCopy] = useState("Copy");
  const [background, setBackground] =
    useState<BackgroundInterface>(initialBackground);
  const handleClickClock = () => {
    let styleActiveBg: BackgroundInterface = {
      backgroundColor: "var(--dark-violet)",
    };
    setTextCopy("Copied!");
    setBackground(styleActiveBg);
    setInterval(() => {
      styleActiveBg.backgroundColor = "var(--cyan)";
      setBackground(styleActiveBg);
      setTextCopy("Copy");
    }, 3000);
  };
  const handleRemoveLink = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let getId: string = evt.currentTarget.value;
    handleDelete(getId);
  };
  return (
    <ShortLinkBox>
      <ShortLinkOriginal>{urlOriginal}</ShortLinkOriginal>
      <ShortLinkShort>{urlShort}</ShortLinkShort>
      <ShortLinkButton
        className="btnClipboard"
        data-clipboard-text={urlShort}
        onClick={handleClickClock}
        style={background}
      >
        {textCopy}
      </ShortLinkButton>
      <ButtonDeleteLink
        className="button-delete-link"
        value={idLink}
        onClick={(evt) => handleRemoveLink(evt)}
        aria-label="Delete link"
      >
        <ButtonDeleteLinkImage src={deleteImage} alt="Delete" />
      </ButtonDeleteLink>
    </ShortLinkBox>
  );
}
