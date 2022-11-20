import {
  ShortLinkBox,
  RootObjectJson,
  ErrorRes,
} from "../interfaces/interface";

export async function getData(url: string): Promise<ShortLinkBox | ErrorRes> {
  const urlGet = `https://api.shrtco.de/v2/shorten?url=${url}`;
  let result: ShortLinkBox | ErrorRes;
  try {
    const res: Response = await fetch(urlGet);
    const json: Promise<RootObjectJson> = await res.json();

    if (!res.ok) {
      let viewError: string = JSON.stringify({
        status: res.status,
        statusText: res.statusText,
      });
      throw viewError;
    }

    result = {
      id: self.crypto.randomUUID(),
      urlShort: (await json).result.full_short_link,
      urlLarge: (await json).result.original_link,
    };
    return result;
  } catch (err) {
    if (typeof err === "string") {
      result = JSON.parse(err);
    } else {
      result = {
        status: 404,
        statusText: "An error arose in the file /functions/getData.ts",
      };
    }
    return result;
  }
}
