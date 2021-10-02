import {Box, Divider, Grid, Typography} from "@mui/material";
import waterEmblem from '../Icons/Emblems/water.png'
import fireEmblem from '../Icons/Emblems/fire.png'
import snowCatEmblem from '../Icons/Emblems/snow-cat.png'
import hikerEmblem from '../Icons/Emblems/hiker.png'
import historyEmblem from '../Icons/Emblems/history.png'
import {useMemo} from "react";

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
            alignItems: 'center'
          }}>
            <Typography variant="h5">
              Points
            </Typography>
            <Typography variant="h5">
              72
            </Typography>
            <Typography variant="h5">
              Points
            </Typography>

          </Box>
        </Grid>
      </Grid>
      <hr/>
      <Typography variant="h4">Conquers</Typography>
    </Box>
  )
}

function pickRandomEmblems(): Emblem[] {
  const pickedEmblems:Emblem[] = []
  while (pickedEmblems.length < 3) {
    const randomEmblem = emblems[Math.floor(Math.random() * emblems.length)]
    if (!pickedEmblems.find(e => e.title === randomEmblem.title)) {
      pickedEmblems.push(randomEmblem)
    }
  }
  return pickedEmblems
}
