import React, { useEffect, useState } from "react";
import { ShortLinkBox, RootObjectJson } from "../interfaces/interface";
import { saveLinkLocal } from "../interfaces/variables";

export default function LogicApp() {
  const [urlUser, setUrlUser] = useState<string>("");
  const [linkShort, setLinkShort] = useState<ShortLinkBox[]>([]);

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
    let urlGet = `https://api.shrtco.de/v2/shorten?url=${urlUser}`;
    try {
      let res: Response = await fetch(urlGet);
      let json: Promise<RootObjectJson> = await res.json();

      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }

      const fullData: ShortLinkBox = {
        id: self.crypto.randomUUID(),
        urlShort: (await json).result.full_short_link,
        urlLarge: (await json).result.original_link,
      };

      setLinkShort([...linkShort, fullData]);
      let saveLocal: string = JSON.stringify([...linkShort, fullData]);
      localStorage.setItem(saveLinkLocal, saveLocal);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
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
    <>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <label htmlFor="url">Enter a URL:</label>
          <input
            type="text"
            id="url"
            name="url"
            onChange={(evt) => handleChange(evt)}
            value={urlUser}
          />
          <input type="submit" value="Short URL" />
        </form>
      </div>
      <div className="">
        {linkShort.map((item) => (
          <div key={item.id}>
            <b>{item.urlLarge}</b>
            <i>{item.urlShort}</i>
            <button className={item.id} onClick={(evt) => handleDelete(evt)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
