import { ShortLinkBox, RootObjectJson } from "../interfaces/interface";
async function getData(url: string): Promise<ShortLinkBox | Error> {
  const urlGet = `https://api.shrtco.de/v2/shorten?url=${url}`;
  try {
    const res: Response = await fetch(urlGet);
    const json: Promise<RootObjectJson> = await res.json();

    if (!res.ok) {
      throw { status: res.status, statusText: res.statusText };
    }

    const fullData: ShortLinkBox = {
      id: self.crypto.randomUUID(),
      urlShort: (await json).result.full_short_link,
      urlLarge: (await json).result.original_link,
    };
    return fullData;
  } catch (error) {
    let geRror: Error;
    if (error instanceof Error) {
      geRror = error;
    }
    return geRror;
  }
}
