import {BottomNavigation, BottomNavigationAction, Box, createTheme, Fab, ThemeProvider} from '@mui/material';
import React from 'react';
import './App.css';
import PoiMapWithMarkers from './Components/PoiMapWithMarkers';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import mapIcon from './Icons/map.svg'
import conquersIcon from './Icons/conquers.svg'
import rankIcon from './Icons/rank.svg'


const theme = createTheme({
  palette: {
    primary: {
      main: '#50732f'
    }
  }
});

function App() {



  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        flexDirection: 'column'
      }}>
        <PoiMapWithMarkers/>
      </Box>

      <BottomNavigation
        showLabels
        value={"Recents"}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2000
        }}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction label="Maps" icon={<img alt="Map icon" src={mapIcon}/>}/>
        <BottomNavigationAction label="Conquers" icon={<img alt="Conquers icon" src={conquersIcon}/>}/>

        <Fab color="primary"
             sx={{
               marginTop: '-1.5em',
               minWidth: '4em',
               minHeight: '4em',
             }}>
          <AddIcon/>
        </Fab>

        <BottomNavigationAction label="Rank" icon={<img alt="Rank icon" src={rankIcon}/>}/>
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>}/>
      </BottomNavigation>

    </ThemeProvider>
  );
}

export default App;
