import {useState} from "react"
import AggregatedPoiService from "../Services/AggregatedPoiService";
import {Poi} from "../Models/Poi";

export default function useAggregatedPoiService() {
  const [pois, setPois]       = useState<Poi[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const load = async () => {
    setIsLoading(true)
    try {
      const pois = await AggregatedPoiService.getAllPois()
      setPois(pois)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    pois,
    load,
    isLoading
  } as const
}
