import React ,{useState}from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'
import Auth from "../Auth";
import { Auth0Provider, useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Private from './Private'
import {
 Trending,
 Movies,
 TV_Series,
 Search
} from "./Bottom/export";

import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom';
import { useEffect } from 'react';
    
const Home = () => {
let [login,setlogin]=useState('');
let [signout,setsignout]=useState(0)
let {user}=useAuth0()

return (
  <Box sx={{ width: "100%", height: "100%" }}>
    <Router>
      <Header setlogin={setlogin} />
      <Routes>
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV Series" element={<TV_Series />} />
          <Route path="/Search" element={<Search />} />
  <Route path="/" element={<Auth />} />
      </Routes>
    { user&&(<Footer />)}
    </Router>
  </Box>
);
}

export default Home
