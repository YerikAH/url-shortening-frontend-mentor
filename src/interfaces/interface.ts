export interface ShortLinkBox {
  id: string;
  urlShort: string;
  urlLarge: string;
}
export interface RootObjectJson {
  ok: boolean;
  result: ResultJson;
}

interface ResultJson {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  short_link3: string;
  full_short_link3: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}
