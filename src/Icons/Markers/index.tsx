import _dot0 from './dot-0.svg'
import _dot1 from './dot-1.svg'
import _dot2 from './dot-2.svg'
import _dot3 from './dot-3.svg'
import _dot4 from './dot-4.svg'
import _star0 from './star-0.svg'
import _star1 from './star-1.svg'
import _star2 from './star-2.svg'
import leaflet from "leaflet";

const leafletIcons = [
  _dot0,
  _dot1,
  _dot2,
  _dot3,
  _dot4,
  _star0,
  _star1,
  _star2
].map(imgUrl => leaflet.icon({
  iconUrl: imgUrl,
  iconSize: [64, 64],
  iconAnchor: [32, 64]
}))

export function getRandomIcon() {
  return leafletIcons[Math.floor(Math.random() * leafletIcons.length)]
}
