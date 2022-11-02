import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar} from '@material-ui/core'
import { Tooltip } from "@mui/material";

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Menu } from '@material-ui/icons';
import {Grid,Card,CardActionArea,CardMedia,CardContent,CardActions} from '@material-ui/core'
import { ListItemButton } from '@mui/material';
import {Skeleton}from '@mui/material';
import { useEffect } from 'react';
import { useUserAuth } from "./Auth";
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact','signOut'];

function NavBar(props) {
      let {signout,user}=useUserAuth();
console.log(user)
let navigate=useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
let [news,setnews]=React.useState([])
let [news1,setnews1]=React.useState([])
console.log(news)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",padding:'10px' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Avatar style={{ background: "orange" }}>D</Avatar>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton style={{ textAlign: "center", color: "red" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <Typography variant="body2">{user.email}</Typography>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
useEffect(()=>{
const options = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "aaeeedde36msh406345f13635f05p13b37ejsna57fb365f67c",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

fetch(
  "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
  options
)
  .then((response) => response.json())
  .then((response) => {setnews(response.value) ; setnews1([response.value[0],response.value[1]])})
  .catch((err) => console.error(err))
},[])


  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Avatar style={{ background: "red" }}>D</Avatar>
          </Typography>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "absolute",
              right: "30px",
            }}
          >
            {navItems.map((item) => (
      <Tooltip title={item}>
                <Button
                  style={{ margin: "10px" }}
                  key={item}
                  variant="contained"
                  color="secondary"
                  onClick={async () => {
                    if (item === "signOut") {
                      await signout();
                      navigate("/");
                    }
                  }}
                >
                        
                  {item}
                </Button>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        style={
          {
            //   display: "flex",
            //   flexDirection: "column",
            //   padding: "20px",
          }
        }
      >
        <Grid
          container
          spacing={12}
          style={{ height: "500px", marginTop: "70px" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={7}>
            {/* <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            /> */}
            <Typography gutterBottom variant="h5" component="div">
              Feature Articles
            </Typography>
            <Card style={{ width: "300px" }}>
              <CardActionArea>
                {news.length === 0 ? (
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={250}
                    height={150}
                  />
                ) : (
                  <CardMedia
                    component="img"
                    height="150px"
                    width="250px"
                    image={news[0].image.thumbnail.contentUrl}
                    alt="green iguana"
                  />
                )}

                <CardContent>
                  {news.length === 0 ? (
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="80%"
                      style={{ marginBottom: 6 }}
                    />
                  ) : (
                    <Typography gutterBottom variant="body1" component="div">
                      {news[0].name}
                    </Typography>
                  )}
                  {news.length === 0 ? (
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="80%"
                      style={{ marginBottom: 6 }}
                    />
                  ) : (
                    <Typography gutterBottom variant="body3" component="div">
                      {news[0].description}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
              <CardActions>
                {news.length == 0 ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <Button size="small" color="primary">
                    Share
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>

          {/* {  mobileOpen==0? (<Grid item  style={{ display: { xs: "none", sm: "none" ,lg:'block' }} } lg={5}>
            <Stack>
                {
                    news1?.map((item)=>(
                  <Card style={{ width: "200px", height: "300px" }}>
               
                  <CardMedia
                    component="img"
                    height="150px"
                    width="250px"
                    image={item.image.thumbnail.contentUrl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body3" component="div">
                      {item.name}
                    </Typography>
                    </CardContent>
                    </Card>

                    ))
                }
            </Stack>
          </Grid>):console.log('open')
          
          } */}
        </Grid>

        <Grid container spacing={4} alignItems="center" justify="center">
          {(news.length == 0 ? Array.from(new Array(12)) : news).map(
            (item, index) => (
              <Grid item xs="auto" sm={6} md={4} lg={3} key={index}>
                <Card style={{ width: "200px", height: "300px",background:  'linear-gradient(to right, #ff9966, #ff5e62)' }}>
                  <CardActionArea>
                    {item ? (
                      <CardMedia
                        component="img"
                        height="150px"
                        width="250px"
                        image={item.image.thumbnail.contentUrl}
                        alt="green iguana"
                      />
                    ) : (
                      <Skeleton
                        variant="rectangular"
                        width={250}
                        height={150}
                      />
                    )}
                    <CardContent>
                      {item ? (
                        <Typography
                          gutterBottom
                          variant="body3"
                          component="div"
                        >
                          {item.name}
                        </Typography>
                      ) : (
                        <Skeleton
                          animation="wave"
                          height={10}
                          width="80%"
                          style={{ marginBottom: 6 }}
                        />
                      )}
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {item ? (
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    ) : (
                      <Skeleton
                        animation="wave"
                        height={10}
                        count={4}
                        width="80%"
                        style={{ marginBottom: 6 }}
                      />
                    )}
                  </CardActions>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {

  window: PropTypes.func,
};

export default NavBar;
