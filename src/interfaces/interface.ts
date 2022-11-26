export interface ShortLinkBox {
  id: string;
  urlShort: string;
  urlLarge: string;
}
export interface RootObjectJson {
  ok: boolean;
  result: ResultJson;
  error_code?: number;
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

export type ErrorRes = number;
export interface MessagesModel {
  error_one: string;
  error_two: string;
  error_three: string;
  error_four: string;
  error_five: string;
  error_six: string;
  error_seven: string;
  error_eight: string;
  error_nine: string;
  error_ten: string;
  error_special: string;
}
export interface Props {
  idLink: string;
  urlOriginal: string;
  urlShort: string;
  handleDelete: (id: string) => void;
}
export interface BackgroundInterface {
  backgroundColor: string;
}
export interface BorderInterface {
  border: string;
  color: string;
}
