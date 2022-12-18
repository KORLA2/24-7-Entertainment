import React ,{useEffect, useState} from 'react'
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import '../Card_template/Card.css'
import Card from '../Card_template/Card'
import ContentModal from "../ContentModal/ContentModal";

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
let [movies, setmovies] = useState([]);
let [category, setcategory] = useState([]);
let [selected, setselected] = useState([]);
let [overview, setoverview] = useState("");
let [image, setimage] = useState("");
let [date, setdate] = useState("");
let [title, settitle] = useState("");
let [page, setpage] = useState(1);
let [total, settotal] = useState(0);
let [open, setOpen] = useState(0);
const handleOpen = () => setOpen(true);

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
          <Grid item xs={4} sm={4} md={3} key={index}>
            <Badge
              badgeContent={e.vote_average}
              color={e.vote_average > 5 ? "primary" : "secondary"}
            />
            <Item
              className="hover"
              onClick={(ex) => {
                handleOpen();
                setoverview(e.overview);
                setimage(e.poster_path);
                settitle(e.original_title||e.name);
                setdate(e.release_date);
              }}
            >
              <Card
                image={e.poster_path}
                title={e.original_title || e.name}
                date={e.release_date || e.first_air_date}
                media={e.media_type}
              />
            </Item>
            <ContentModal
              image={image}
              title={title}
              date={date}
              media={e.media_type}
              open={open}
              setOpen={setOpen}
              overview={overview}
            />
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
        <Pagination
          sx={{ color: "white" }}
          count={total}
          color="primary"
          onChange={(e) => {
            setpage(e.target.textContent);
            window.scroll(0, 0);
          }}
        />
      </div>
    </div>
  );
}

export default LiveMatches