import React ,{useEffect, useState} from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import { Button,Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth0 } from "@auth0/auth0-react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));



export default function SearchAppBar() {
let [text,settext]=useState('');

let {loginWithRedirect,logout,user ,}=useAuth0()


console.log(user)
return (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: "20px",
            color: "black",
          }}
        >
          24/7 Entertainment
        </Typography>

        {!user ? (
          <Button
            variant="filled"
            color="primary"
            onClick={() => loginWithRedirect() }
          >
            Sign IN
          </Button>
        ) : (
          <Button variant="filled" color="primary" onClick={() => logout()}>
            <Avatar
              alt="No Image"
              src="https://s.gravatar.com/avatar/3cbcc56dadf6151409b86f2b2ed360a1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgo.png"
     
            />
          </Button>
        )}
      </Toolbar>
    </AppBar>
  </Box>
);
}
