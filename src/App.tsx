import {BottomNavigation, BottomNavigationAction, Box, createTheme, Fab, ThemeProvider} from '@mui/material';
import React, {useState} from 'react';
import './App.css';
import PoiMapWithMarkers from './Components/PoiMapWithMarkers';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import mapIcon from './Icons/map.svg'
import conquersIcon from './Icons/conquers.svg'
import rankIcon from './Icons/rank.svg'
import Conquers from "./Components/Conquers";
import Rank from "./Components/Rank";
import Profile from "./Components/Profile";


const theme = createTheme({
  palette: {
    primary: {
      main: '#50732f'
    }
  }
});

function App() {

  const [currentTab, setCurrentTab] = useState('maps')


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        flexDirection: 'column'
      }}>
        {
          currentTab === 'maps' && <PoiMapWithMarkers/>
        }
        {
          currentTab === 'conquers' && <Conquers/>
        }
        {
          currentTab === 'rank' && <Rank/>
        }
        {
          currentTab === 'profile' && <Profile/>
        }
      </Box>

      <BottomNavigation
        showLabels
        value={currentTab}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
          boxShadow: '0px 0px 10px gray'
        }}

        onChange={(event, newValue) => {
          setCurrentTab(newValue)
        }}
      >
        <BottomNavigationAction value="maps" label="Maps" icon={<img alt="Map icon" src={mapIcon}/>}/>
        <BottomNavigationAction value="conquers" label="Conquers" icon={<img alt="Conquers icon" src={conquersIcon}/>}/>

        <Fab color="primary"
             sx={{
               marginTop: '-1.5em',
               minWidth: '4em',
               minHeight: '4em',
             }}>
          <AddIcon/>
        </Fab>

        <BottomNavigationAction value="rank" label="Rank" icon={<img alt="Rank icon" src={rankIcon}/>}/>
        <BottomNavigationAction value="profile" label="Profile" icon={<AccountCircleIcon/>}/>
      </BottomNavigation>

    </ThemeProvider>
  );
}

export default App;
