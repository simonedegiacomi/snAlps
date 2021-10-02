import _bellissimoPanorama from './bellissimo-panorama.jpg'
import _biblioteca from './biblioteca.jpg'
import _bolzanoFioriPrimavera from './bolzano-fiori-primavera.jpg'
import _bolzanoInverno from './bolzano_inverno.jpg'
import _cattedrale from './BozenKathedrale.jpg'
import _castello from './castel-mareccio.jpg'
import _chiesa from './chiesa-del-sacro.jpg'
import _dom from './Dom_Maria_Himmelfahrt.jpg'
import _dsc from './DSC_7782.jpg'
import _duomo from './duomo-di-bolzano.jpg'
import _castelloMaretsch from './il-castello-maretsch.jpg'
import _museo from './museo-archeologico.jpg'
import _treCime from './tre-cime.jpg'
import _waltherplatz from './waltherplatz.jpg'

export type Photo = {
  likes: number;
  comments: number;
  title: string;
  points: number;
  remainingDays: number;
  categoryName: string;
  src: string;
}

export const photos: Photo[] = [
  {
    src: _bellissimoPanorama,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Bellissimo panorama',
    categoryName: 'Panorami'
  },
  {
    src: _biblioteca,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Biblioteca',
    categoryName: 'Edifici'
  },
  {
    src: _bolzanoFioriPrimavera,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Fiori in primavera',
    categoryName: 'Panorami'
  },
  {
    src: _bolzanoInverno,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: "Bolzano d'Inverno",
    categoryName: 'Panorami'
  },
  {
    src: _cattedrale,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Cattedrale',
    categoryName: 'Edifici'
  },
  {
    src: _castello,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Castello',
    categoryName: 'Edifici'
  },
  {
    src: _chiesa,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Chiesa',
    categoryName: 'Edifici'
  },
  {
    src: _dom,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Edificio religioso',
    categoryName: 'Edificio religioso'
  },
  {
    src: _dsc,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Edificio storico',
    categoryName: 'Edificio storico'
  },
  {
    src: _duomo,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Duomo',
    categoryName: 'Edifici'
  },
  {
    src: _castelloMaretsch,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Castello Maretsch',
    categoryName: 'Edifici'
  },
  {
    src: _museo,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Museo',
    categoryName: 'Edifici'
  },
  {
    src: _treCime,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Tre cime',
    categoryName: 'Panorami'
  },
  {
    src: _waltherplatz,
    likes: 1 + Math.floor(Math.random() * 200),
    comments: 1 + Math.floor(Math.random() * 50),
    points: 1 + Math.floor(Math.random() * 8),
    remainingDays: 1 + Math.floor(Math.random() * 10),
    title: 'Waltherplatz',
    categoryName: 'Panorami'
  }
]
