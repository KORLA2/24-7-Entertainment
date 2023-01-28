import React,{useState} from 'react'
import { Button ,Box,TextField,Tabs,Tab,Typography, Pagination,Badge} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from "prop-types";
import { useEffect } from 'react';
import { createTheme } from "@mui/system";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../Card_template/Card.css";
import Card from "../Card_template/Card";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "white",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

let dark = createTheme({
  palette: {
    type: "dark",
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


const PreviousMatches = () => {
  const [value, setValue] = React.useState('0');
  const [search, setsearch] = React.useState('');
  const [content, setcontent] = React.useState([]);
  const [page, setpage] = React.useState(2);
  const [total, settotal] = React.useState(0);
let [open, setOpen] = useState(0);

let [image, setimage] = useState("");
let [image1, setimage1] = useState("");
let [date, setdate] = useState("");
let [title, settitle] = useState("");
let [id, setid] = useState("");

let fetchentertainment=()=>{

    fetch(
      `https://api.themoviedb.org/3/search/${value === "0" ? "movie" : "tv"}?api_key=6e2cc560592379165dd290f3913043c8&language=en-US&query=${search}&page=${page}&include_adult=false`
    )
      .then((response) => response.json())
      .then((response) => {
        setcontent(response.results);
console.log(response,search)
        settotal(response.total_results);
      })
      .catch((err) => console.error(err));
}

  useEffect(()=>{
fetchentertainment()

},[page])

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
const handleOpen = () => setOpen(true);
  return (
    <Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          m: 2,
          pl:5
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          fullWidth
          color="secondary"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          focused
          label="Outlined"
          variant="outlined"
        />
        <Button onClick={fetchentertainment}>
          <SearchIcon />
        </Button>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            sx={{ width: "100%" }}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              sx={{ width: "50%" }}
              label="Search Movies"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ width: "50%" }}
              label="Search Tv Series"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {content?.map((e, index) => (
            <Grid item xs={4} sm={4} md={3}  sx={{p:5}}key={index}>
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
                  settitle(e.original_title || e.name);
                  setdate(e.release_date);
                  setid(e.id);
                  setimage1(e.backdrop_path);
                }}
              >
                <Card
                  image={e.poster_path}
                  title={e.original_title || e.name}
                  date={e.release_date || e.first_air_date}
                  media={e.media_type}
                />
              </Item>
              {/* 
                <ContentModal
                  image={image}
                  image1={image1}
                  title={title}
                  date={date}
                  media={e.media_type}
                  open={open}
                  id={id}
                  setOpen={setOpen}
                  overview={overview}
                /> */}
            </Grid>
          ))}
        </Grid>
      </Box>
      {total > 1 && (
        <Pagination setpage={setpage} count={total} color="primary" />
      )}
    </Box>
  );
}

export default PreviousMatches


