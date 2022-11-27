import React, { useEffect, useState } from "react";
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

  function handleClickClock(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    let styleActiveBg: BackgroundInterface = {
      backgroundColor: "var(--dark-violet)",
    };
    const elementButton: Element = evt.currentTarget!;
    setTextCopy("Copied!");
    setBackground(styleActiveBg);
    elementButton.setAttribute("disabled", "true");

    setTimeout(() => {
      timeOutFunction(styleActiveBg, elementButton);
    }, 3000);
  }

  function timeOutFunction(
    objStyle: BackgroundInterface,
    elementHtml: Element
  ) {
    objStyle.backgroundColor = "var(--cyan)";
    setBackground(objStyle);
    setTextCopy("Copy");
    elementHtml.removeAttribute("disabled");
  }

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
        onClick={(evt) => handleClickClock(evt)}
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
