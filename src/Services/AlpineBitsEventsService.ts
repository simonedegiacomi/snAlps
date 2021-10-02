import {Poi} from "../Models/Poi";
import {LocalizedString} from "../Models/LocalizedString";

const pagesToFetch = 5

class AlpineBitsEventsService {

  async getAllEvents(): Promise<Poi[]> {
    const promises = []
    for (let i = 1; i <= pagesToFetch; i++) {
      promises.push(this.getAllEventsFromPage(i))
    }
    return (await Promise.all(promises)).flatMap(x => x)
  }

  private async getAllEventsFromPage(page: number = 1): Promise<Poi[]> {
    const res              = await fetch(`https://destinationdata.alpinebits.opendatahub.bz.it/2021-04/events?page[number]=${page}`)
    const json             = await res.json()
    const alpineBitsEvents = json.data
    const pois: Poi[]      = await Promise.all(alpineBitsEvents.map(AlpineBitsEventsService.alpineBitEventToPoi))
    return pois.filter(poi => !!poi.coordinates)
  }

  static async alpineBitEventToPoi(alpineBitsEvent: any): Promise<Poi> {
    return {
      id: alpineBitsEvent.id,
      title: alpineBitsEvent.name as LocalizedString,
      coordinates: await AlpineBitsEventsService.findCoordinates(alpineBitsEvent)
    }
  }

  static async findCoordinates(alpineBitsEvent: any): Promise<[number, number] | null> {
    const {relationships} = alpineBitsEvent
    if (!relationships.venues || !relationships.venues.links || !relationships.venues.links.related) {
      return null
    }
    const venueLink = relationships.venues.links.related
    const res       = await fetch(venueLink)
    const json      = await res.json()
    if (json.data.length < 0 || !json.data[0].attributes ||
      !json.data[0].attributes.geometries || json.data[0].attributes.geometries.length < 0) {
      return null
    }
    const coordinates = json.data[0].attributes.geometries[0].coordinates
    return [coordinates[1], coordinates[0]]
  }
}

export default new AlpineBitsEventsService()
