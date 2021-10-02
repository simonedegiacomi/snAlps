import {Poi} from "../Models/Poi";
import AlpineBitsEventsService from "./AlpineBitsEventsService";

class AggregatedPoiService {
  async getAllPois(): Promise<Poi[]> {
    return await AlpineBitsEventsService.getAllEvents()
  }
}

export default new AggregatedPoiService()
