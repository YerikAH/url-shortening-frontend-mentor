import React, { useEffect, useState } from "react";
import {
  ShortLinkBox,
  ErrorRes,
  RootObjectJson,
  BorderInterface,
} from "../interfaces/interface";
import { initialBorder } from "../home/initialVariables";
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
import Loader from "./Loader";

export default function SectionTwo() {
  const [borderError, setBorderError] =
    useState<BorderInterface>(initialBorder);
  const [urlUser, setUrlUser] = useState("");
  const [linkShort, setLinkShort] = useState<ShortLinkBox[]>([]);
  const [thereError, setThereError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const userChange = evt.target.value;
    setUrlUser(userChange);
  };
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setUrlUser("");
    getData();
  };
  const handleDelete = (id: string) => {
    const tempLinks: ShortLinkBox[] = [...linkShort];
    const tempDeleteLinks: ShortLinkBox[] = tempLinks.filter(
      (item) => item.id !== id
    );
    const convertToString = JSON.stringify(tempDeleteLinks);

    setLinkShort(tempDeleteLinks);
    localStorage.setItem(saveLinkLocal, convertToString);
  };
  async function getData() {
    const urlGet = `https://api.shrtco.de/v2/shorten?url=${urlUser}`;
    setLoader(true);
    try {
      const res: Response = await fetch(urlGet);
      const json: Promise<RootObjectJson> = await res.json();

      if (!res.ok) {
        const viewError: number | undefined = (await json).error_code; // bad code, i think
        const passAsString: string = JSON.stringify(viewError);
        throw passAsString;
      }

      const result: ShortLinkBox = {
        id: self.crypto.randomUUID(),
        urlShort: (await json).result.full_short_link,
        urlLarge: (await json).result.original_link,
      };

      setLinkShort([...linkShort, result]);
      const saveLocal: string = JSON.stringify([...linkShort, result]);
      localStorage.setItem(saveLinkLocal, saveLocal);
      setThereError(false);
      setLoader(false);
    } catch (err) {
      let result: ErrorRes;
      if (typeof err === "string") {
        result = JSON.parse(err);
      } else {
        result = 11;
      }
      const messageCustom = customMessage(result);
      setErrorMessage(messageCustom);
      setThereError(true);
      setLoader(false);
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
  useEffect(() => {
    let borderError: BorderInterface = {
      border: "5px solid var(--red)",
      color: "var(--red)",
    };
    if (thereError) {
      setBorderError(borderError);
    } else {
      borderError.color = "var(--very-dark-blue)";
      borderError.border = "none";
      setBorderError(borderError);
    }
  }, [thereError]);

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
            style={borderError}
          />
          {thereError && <SectionTwoBoxSpan>{errorMessage}</SectionTwoBoxSpan>}
          <SectionTwoBoxButton type="submit">Shorten It!</SectionTwoBoxButton>
        </DivSectionTwoBoxLogic>
      </DivSectionTwoBox>
      <AllShortLinks>
        {linkShort.map((item) => (
          <ShortLink
            key={item.id}
            idLink={item.id}
            urlOriginal={item.urlLarge}
            urlShort={item.urlShort}
            handleDelete={handleDelete}
          />
        ))}
        {loader && <Loader />}
      </AllShortLinks>
    </DivSectionTwo>
  );
}
