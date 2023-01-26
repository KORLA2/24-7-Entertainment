import React,{useEffect,useState} from 'react'
import Backdrop from "@mui/material/Backdrop";
import {Box,Chip} from "@mui/material";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {Button} from "@material-ui/core"
import { Typography } from "@material-ui/core";
import Card from '../Card_template/Card'
import Grid from "@mui/material/Grid";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const style = {
  position: "absolute",
left:'50%',
transform:'translate(-50%,-50%)',
top:'50%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  overflowY:'scroll',
  boxShadow: 24,
  p: 4,
};
const ContentModal = ({open,setOpen,overview,title,image,date,image1,media,id}) => {
let [cast,setcast]=useState([])
let [genres, setgenres] = useState([]);
let [video,setvideo]=useState('');
  const handleClose = () => setOpen(false);
console.log(media,id)


const handleDragStart = (e) => e.preventDefault();

useEffect(()=>{

fetch(
`https://api.themoviedb.org/3/movie/${id}?api_key=6e2cc560592379165dd290f3913043c8&language=en-US
`
)
  .then((response) => response.json())
  .then((response) => {setgenres(response.genres); })
  .catch((err) => console.error(err));


fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6e2cc560592379165dd290f3913043c8&language=en-US`).then(res=>res.json()).then((res)=>{ setvideo(res.results[0].key)}).catch(err=>console.log(err));

fetch(
  `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6e2cc560592379165dd290f3913043c8&language=en-US`
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
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Grid
            container
            spacing={{ xs: 10, md: 3 }}
            columns={{ xs: 2, md: 8 }}
          >
            <Grid item xs={2} md={4}>
              {/* <img
                src={"https://image.tmdb.org/t/p/w300/" + `${image}`}
                style={{
                  height: "70%",
                  width: "70%",
                  display: "none",
                  objectFit: "contain",
                }}
              /> */}
              <img
                src={"https://image.tmdb.org/t/p/w500/" + `${image1}`}
                // style={{
              
                //   objectFit: "contain",
                // }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  id="transition-modal-title"
                  variant="body1"
                  component="h2"
                >
                  {title}
                </Typography>
                <Typography
                  id="transition-modal-title"
                  variant="subtitle2"
                  component="body2"
                >
                  {date}
                </Typography>
              </div>
              <div
                style={{
                  margin: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {genres?.map((e) => (
                  <Chip label={e.name} sx={{ margin: "2px" }} />

                ))}
              </div>
            </Grid>
            <Grid item xs={2} md={4}>
              <div
                style={{
                  height: "40%",
                  overflowY: "scroll",
                  scrollbarWidth: "thin",
                  borderRadius: "20px",
                  background: " rgba(0,0,0,0.08)",
                  padding: "15px",
                  textAlign: "justify",
                  boxShadow: "14px 11px 14px 3px rgba(0,0,0,0.2)",
                }}
              >
                <Typography
                  id="transition-modal-description"
                  variant="body2"
                  sx={{ mt: 5,mb:5 }}
                >
                  {overview}
                </Typography>
              </div>
              <div>
                <AliceCarousel responsive={
                  res
                } 
                autoPlay
                infinite
                disableButtonsControls
                disableDotsControls
                mouseTracking items={items} />
              </div>
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
      </Fade>
    </Modal>
  );
}

export default ContentModal
