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
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, width: "100%" , background:'indianred', zIndex:'1'}}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Trending"
        value="Trending"
        icon={<RestoreIcon />}
      />

      <BottomNavigationAction
        label="Movies"
        value="Movies"
        icon={<Upcoming />}
      />

      <BottomNavigationAction
        label="TV series"
        value="TV Series"
        icon={<LocationOnIcon />}
      />

      <BottomNavigationAction
        label="Search"
        value="Search"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
