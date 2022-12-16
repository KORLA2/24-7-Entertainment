import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Upcoming } from '@mui/icons-material';
import { Navigate, useNavigate } from "react-router-dom";
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("Live");
let navigate=useNavigate()
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
navigate(`/${newValue}`)

  };

  return (
    <BottomNavigation sx={{position:'absolute',bottom:0 ,width:'100%'}} value={value} onChange={handleChange}>
    

      <BottomNavigationAction
        label="Live"
        value="Live"
        icon={<RestoreIcon />}
      />



      <BottomNavigationAction
        label="UpcomingMatches"
        value="favorites"
        icon={<Upcoming />}
      />


      <BottomNavigationAction
        label="MostViewed"
        value="nearby"
        icon={<LocationOnIcon />}
      />
    
      <BottomNavigationAction
        label="PreviousMatches"
        value="folder"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
