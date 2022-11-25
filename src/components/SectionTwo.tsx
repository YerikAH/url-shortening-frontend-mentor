import React, { useEffect, useState } from "react";
import {
  ShortLinkBox,
  ErrorRes,
  RootObjectJson,
} from "../interfaces/interface";
import { saveLinkLocal } from "../interfaces/variables";
import { customMessage } from "../functions/custom";
import ShortLink from "./ShortLink";
import {
  DivSectionTwo,
  DivSectionTwoBox,
  DivSectionTwoBoxImage,
  DivSectionTwoBoxLogic,
  SectionTwoBoxButton,
  SectionTwoBoxInput,
  AllShortLinks,
  SectionTwoBoxSpan,
} from "../styles/sectiontwo-styles";

export default function SectionTwo() {
  const [urlUser, setUrlUser] = useState("");
  const [linkShort, setLinkShort] = useState<ShortLinkBox[]>([]);
  const [thereError, setThereError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    let userChange = evt.target.value;
    setUrlUser(userChange);
  };
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    getData();
  };
  const handleDelete = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};
  async function getData() {
    const urlGet = `https://api.shrtco.de/v2/shorten?url=${urlUser}`;

    try {
      const res: Response = await fetch(urlGet);
      const json: Promise<RootObjectJson> = await res.json();

      if (!res.ok) {
        let viewError: number | undefined = (await json).error_code; // bad code, i think
        let passAsString: string = JSON.stringify(viewError);
        throw passAsString;
      }

      let result: ShortLinkBox = {
        id: self.crypto.randomUUID(),
        urlShort: (await json).result.full_short_link,
        urlLarge: (await json).result.original_link,
      };

      setLinkShort([...linkShort, result]);
      let saveLocal: string = JSON.stringify([...linkShort, result]);
      localStorage.setItem(saveLinkLocal, saveLocal);
      setThereError(false);
    } catch (err) {
      let result: ErrorRes;
      if (typeof err === "string") {
        result = JSON.parse(err);
      } else {
        result = 11;
      }
      let messageCustom = customMessage(result);
      setErrorMessage(messageCustom);
      setThereError(true);
    }
  }
  useEffect(() => {
    const getVintageData = localStorage.getItem(saveLinkLocal);
    if (typeof getVintageData === "string") {
      const vintageDataJson: ShortLinkBox[] = JSON.parse(getVintageData);
      setLinkShort(vintageDataJson);
    } else {
      setLinkShort([]);
    }
  }, []);

  return (
    <DivSectionTwo>
      <DivSectionTwoBox>
        <DivSectionTwoBoxImage></DivSectionTwoBoxImage>
        <DivSectionTwoBoxLogic onSubmit={(evt) => handleSubmit(evt)}>
          <SectionTwoBoxInput
            placeholder="Shorten a link here..."
            id="url"
            name="url"
            onChange={(evt) => handleChange(evt)}
            value={urlUser}
          />
          {thereError && <SectionTwoBoxSpan>{errorMessage}</SectionTwoBoxSpan>}
          <SectionTwoBoxButton type="submit">Shorten It!</SectionTwoBoxButton>
        </DivSectionTwoBoxLogic>
      </DivSectionTwoBox>
      <AllShortLinks>
        {linkShort.map((item) => (
          <ShortLink
            key={item.id}
            urlOriginal={item.urlLarge}
            urlShort={item.urlShort}
          />
        ))}
      </AllShortLinks>
    </DivSectionTwo>
  );
}
