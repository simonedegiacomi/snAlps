import {LocalizedString} from "./LocalizedString";

export type Poi = {
  id: string;
  title: LocalizedString;
  coordinates: ([number, number] | null);
}
