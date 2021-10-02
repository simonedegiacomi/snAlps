import {MapContainer, Marker, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import useAggregatedPoiService from "../Hooks/useAggregatedPoiService";
import {useEffect} from "react";
import {getRandomIcon} from "../Icons/Markers";


export default function PoiMapWithMarkers() {
  const {pois, isLoading, load} = useAggregatedPoiService()

  useEffect(() => {
    (async () => {await load()})()
    // eslint-disable-next-line
  }, [])

  return (
    <div style={{flex: 1}}>
      <MapContainer center={[46.4983, 11.3548]}
                    zoom={13}
                    scrollWheelZoom
                    style={{height: '100%'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {
          !isLoading &&
          pois.map(poi => (
            <Marker key={poi.id} position={poi.coordinates!!} icon={getRandomIcon()}>
            </Marker>
          ))
        }


        {/*<Polyline pathOptions={{color: 'lime'}}*/}
        {/*          positions={[*/}
        {/*            [51.505, -0.09],*/}
        {/*            [51.51, -0.1],*/}
        {/*            [51.51, -0.12]*/}
        {/*          ]}/>*/}
      </MapContainer>
    </div>
  );
}
