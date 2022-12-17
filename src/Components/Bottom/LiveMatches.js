import React ,{useEffect, useState} from 'react'
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import '../Card_template/Card.css'
import Card from '../Card_template/Card'
import { Badge } from '@mui/material';
import Pagination from "@mui/material/Pagination";
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core';
import { createTheme } from '@mui/system';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" :'white',
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,


}));

let dark=createTheme({
palette:{
  type:'dark'
}

})

const LiveMatches = () => {
let [movies,setmovies]=useState([]);
let [page,setpage]=useState(1);
useEffect(()=>{


//cockroach db configs

fetch(
  `https://api.themoviedb.org/3/trending/all/day?api_key=6e2cc560592379165dd290f3913043c8&page=${page}`
)
  .then((response) => response.json())
  .then((response) => {setmovies(response.results) ;console.log(response)})
  .catch((err) => console.error(err));


},[page])


console.log(movies)
  return (
    <div style={{ padding: "2rem", scrollBehaviour: "smooth" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies?.map((e, index) => (
          <Grid item xs={4} sm={4} md={4} key={index} className='hover' >
            <Badge
              badgeContent={e.vote_average}
              color={e.vote_average > 5 ? "primary" : "secondary"}
            />
            <Item  >
              <Card
                image={e.poster_path}
                title={e.original_title || e.name}
                date={e.release_date || e.first_air_date}
                media={e.media_type}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "1rem",
          color: "white",
        }}
      >
     <ThemeProvider theme={dark}>

        <Pagination
          sx={{ color: "white" }}
          count={10}
          color="primary"
          onChange={(e) => {
            setpage(e.target.textContent);
            window.scroll(0, 0);
          }}
        />
     </ThemeProvider> 
        
      </div>
    </div>
  );
}

export default LiveMatches