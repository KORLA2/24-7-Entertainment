import React,{useEffect,useState} from 'react'
import Backdrop from "@mui/material/Backdrop";
import {styled } from '@mui/material/styles'
import {Box,Chip,CardMedia,Paper} from "@mui/material";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Slider from "react-slick";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {Button} from "@material-ui/core"
import { Typography } from "@material-ui/core";
import Card from '../Card_template/Card'
import Grid from "@mui/material/Grid";
import  "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  // height: 60,
  // lineHeight: "60px"
  p:4,
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid pink",
  boxShadow: 24,
  p: 4,
};
const ContentModal = ({open,setOpen,overview,title,image,date,image1,media,id}) => {
let [cast,setcast]=useState([])
let [genres, setgenres] = useState([]);
let [video,setvideo]=useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

const handleDragStart = (e) => e.preventDefault();

useEffect(()=>{

fetch(
`https://api.themoviedb.org/3/${media}/${id}?api_key=6e2cc560592379165dd290f3913043c8&language=en-US
`
)
  .then((response) => response.json())
  .then((response) => {setgenres(response.genres) ;console.log(response.genres); })
  .catch((err) => console.error(err));


fetch(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=6e2cc560592379165dd290f3913043c8&language=en-US`).then(res=>res.json()).then((res)=>{ console.log(res);setvideo(res?.results[0] ?.key)}).catch(err=>console.log(err));

fetch(
  `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=6e2cc560592379165dd290f3913043c8&language=en-US`
).then((res) => res.json()).then((res) => {
setcast(res.cast);
console.log(res.cast)
  }).catch((err) => console.log(err));

},[id])
const items =cast?.map((e)=>(  <div> <img style={{ 
 objectFit:'contain',
 }} src={"https://image.tmdb.org/t/p/w300/"+`${e.profile_path}`}  onDragStart={handleDragStart} role="presentation" /> <b>{e.name}</b> </div>))

let res = {
  0: { items: 3 },
  512: { items: 5 },
  1024: { items: 7 },
};

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={2}
            sm={4}
            md={6}
            sx={{ display: "grid", placeItems: "center" }}
          >
            <Item>
              <img
                src={"https://image.tmdb.org/t/p/w300/" + `${image}`}
                style={{ height: "70%", width: "70%", objectFit: "contain" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body">{title}</Typography>
                <Typography variant="body2">{date}</Typography>
              </div>
            </Item>

            <Paper>
              {genres?.map((e) => (
                <Chip label={e.name} variant="filled" sx={{ m: 1 }} />
              ))}
            </Paper>
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={6}
            sx={{ display: "grid", placeItems: "center" }}
          >
            <Item>
              <Typography variant="body2">{overview}</Typography>
            </Item>

            <Button
              variant="outlined"
              color="primay"
              startIcon={<YouTubeIcon />}
              target="_blank"
              href={`https://www.youtube.com/watch?v=${video}`}
            >
              Watch Trailer
              
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ContentModal
