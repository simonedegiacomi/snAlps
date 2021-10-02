import {BottomNavigation, BottomNavigationAction, Box, createTheme, Fab, ThemeProvider} from '@mui/material';
import React from 'react';
import './App.css';
import PoiMapWithMarkers from './Components/PoiMapWithMarkers';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import AlpineBitsEventsService from "./Services/AlpineBitsEventsService";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff00'
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

        <BottomNavigation
          showLabels
          value={"Recents"}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>

          <Fab color="primary"
               sx={{
                 zIndex: 2000,
                 marginTop: '-1.5em'
               }}>
            <AddIcon/>
          </Fab>

          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}

export default App;
