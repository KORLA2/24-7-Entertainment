import React ,{useEffect,useState}from 'react'
import { experimentalStyled as styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../Card_template/Card.css";
import Card from "../Card_template/Card";
import { Badge } from "@mui/material";
import {useGeners} from '../hooks/useGeners'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "white",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const UpcomingMatches = () => {

let [movies, setmovies] = useState([]);
let [category,setcategory]=useState([]);
let [selected,setselected]=useState([]);
let [page,setpage]=useState(1)
let [total,settotal]=useState(0)

let geners_url=useGeners(selected);
console.log(geners_url)
useEffect(()=>{
fetch(
  "https://api.themoviedb.org/3/genre/movie/list?api_key=6e2cc560592379165dd290f3913043c8&language=en-US"
)
  .then((response) => response.json())
  .then((response) =>{ setcategory(response.genres)
  
  })
  .catch((err) => console.error(err));
},[])


useEffect(()=>{

fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=6e2cc560592379165dd290f3913043c8&language=en-US&page=${page}&with_genres=${geners_url}`
)
  .then((response) => response.json())
  .then((response) => {setmovies(response.results); settotal(response.total_pages)})
  .catch((err) => console.error(err));



},[page,geners_url])

console.log(category)
  return (
    <div style={{ padding: "2rem", scrollBehaviour: "smooth" }}>
      {selected.map((e, idx) => (
        <Chip
          key={idx}
          label={e.name}
          onDelete={() => {
            setcategory([...category, e]);
            setselected(selected.filter((sel) => sel.id !== e.id));
          }}
          sx={{ background: "white", margin: "5px" }}
        />
      ))}

      {category?.map((e, idx) => (
        <Chip
          clickable
          key={idx}
          onClick={() => {
            setselected([...selected, e]);
            setcategory(category.filter((cat) => e.id !== cat.id));
          }}
          label={e.name}
          sx={{ background: "white", margin: "5px" }}
        />
      ))}

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies?.map((e, index) => (
          <Grid item xs={4} sm={4} md={3} key={index} className="hover">
            <Badge
              badgeContent={e.vote_average}
              color={e.vote_average > 5 ? "primary" : "secondary"}
            />
            <Item>
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

export default UpcomingMatches