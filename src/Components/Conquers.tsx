import {Box, Divider, Grid, List, ListItem, Typography} from "@mui/material";
import waterEmblem from '../Icons/Emblems/water.png'
import fireEmblem from '../Icons/Emblems/fire.png'
import snowCatEmblem from '../Icons/Emblems/snow-cat.png'
import hikerEmblem from '../Icons/Emblems/hiker.png'
import historyEmblem from '../Icons/Emblems/history.png'
import {useMemo} from "react";
import {photos} from "../TempPhotos";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import crown from '../Icons/crown.svg'

const styles = {
  emblem: {
    width: '5em',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

type Emblem = {
  title: string;
  src: string;
}

const emblems = [
  {
    title: 'AcquaMan',
    src: waterEmblem
  },
  {
    title: 'Fire',
    src: fireEmblem
  },
  {
    title: 'Snow cat',
    src: snowCatEmblem
  },
  {
    title: 'Hiking',
    src: hikerEmblem
  },
  {
    title: 'History',
    src: historyEmblem
  }
]

const sortedPhotos = photos.sort( () => .5 - Math.random() )

export default function Conquers() {
  const pickedEmblems = useMemo(pickRandomEmblems, [])
  return (
    <Box sx={{padding: '1em'}}>
      <Grid container>
        <Grid item xs={8}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Typography variant="h5">
              You Emblems
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row'
            }}>
              {
                pickedEmblems.map(({title, src}) => (
                  <Box key={title} sx={styles.emblem as any}>
                    <img src={src} width="100%"/>
                    <Typography sx={{fontWeight: 'bold'}}>{title}</Typography>
                  </Box>
                ))
              }
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}>
            <Typography variant="h5">
              Points
            </Typography>
            <img src={crown} style={{width: '2em'}}/>
            <Typography variant="h5">
              72
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <hr/>
      <Typography variant="h4">Conquers</Typography>
      <List>
        {
          sortedPhotos.map(({src, title, points, likes, comments, categoryName, remainingDays}) => (
            <ListItem key={title} sx={{padding: 0, display: 'flex', flexDirection: 'row', marginBottom: '.5em'}}>
              <div style={{
                backgroundImage: `url(${src})`,
                width: '5em',
                height: '5em',
                borderRadius: '1em',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                boxShadow: '0px 0px 5px gray'
              }}/>

              <Box sx={{margin: '0 1em 1em 1em', flex: 1}}>
                <Typography sx={{fontWeight: 'bold'}}>{title}</Typography>
                <Typography>Expires in {remainingDays} {remainingDays === 1 ? 'day' : 'days'}</Typography>
                <Typography>{categoryName}</Typography>
                <FavoriteBorderIcon/> {likes} <QuestionAnswerIcon/> {comments}
              </Box>
              <Box>
                <img src={crown} style={{width: '1.5em', marginBottom: '-0.75em'}}/>
                <Typography sx={{fontSize: '2rem', textAlign: 'center'}}>{points}</Typography>
              </Box>
            </ListItem>
          ))
        }
      </List>
      <Box sx={{height: '10em'}}/>
    </Box>
  )
}

function pickRandomEmblems(): Emblem[] {
  const pickedEmblems: Emblem[] = []
  while (pickedEmblems.length < 3) {
    const randomEmblem = emblems[Math.floor(Math.random() * emblems.length)]
    if (!pickedEmblems.find(e => e.title === randomEmblem.title)) {
      pickedEmblems.push(randomEmblem)
    }
  }
  return pickedEmblems
}
