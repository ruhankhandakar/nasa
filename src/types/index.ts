export interface PlanetDataType {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  thumbnail_url?: string;
}

export type PlanetDataStateType = PlanetDataType[] | [];

export interface ITStoreContext {
  loading: boolean;
  planetData: PlanetDataStateType;
}
