import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TvIcon from '@mui/icons-material/Tv';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import {  useNavigate } from "react-router-dom";
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
        icon={< TrendingUpIcon/>}
      />

      <BottomNavigationAction
        label="Movies"
        value="Movies"
        icon={<MovieCreationIcon />}
      />

      <BottomNavigationAction
        label="TV series"
        value="TV Series"
        icon={<TvIcon />}
      />

      <BottomNavigationAction
        label="Search"
        value="Search"
        icon={< SearchIcon/>}
      />
    </BottomNavigation>
  );
}
