import React,{useEffect,useState} from 'react'
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
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
const ContentModal = ({open,setOpen,overview,title,image,date,media,id}) => {
let [cast,setcast]=useState([])

  const handleClose = () => setOpen(false);
console.log(media,id)


const handleDragStart = (e) => e.preventDefault();
const items =cast?.map((e)=>(  <img src={"https://image.tmdb.org/t/p/w300/"+`${e.profile_path}`}  onDragStart={handleDragStart} role="presentation" />))
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
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, md: 8 }}>
            <Grid item xs={1} md={4}>
              <img
                src={"https://image.tmdb.org/t/p/w300/" + `${image}`}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid item xs={1} md={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {title}
                </Typography>
                <Typography
                  id="transition-modal-title"
                  variant="body2"
                  component="body2"
                >
                  {date}
                </Typography>
              </div>
              <div
                style={{
                  height: "40%",
                  overflowY: "scroll",
                  scrollbarWidth: "0px",
                }}
              >
                <Typography id="transition-modal-description" sx={{ mt: 5 }}>
                  {overview}
                </Typography>

              </div>
                <div>
                  <AliceCarousel mouseTracking items={items} />
                </div>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ContentModal
