import React ,{useState}from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'
import Auth from "../Auth";
import {Link} from 'react-router-dom'
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Private from './Private'
import {
  MostViewed,
  PreviousMatches,
  UpcomingMatches,
  LiveMatches
} from "./Bottom/export";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
    
const Home = () => {
let [Text,setText]=useState('');
let [signout,setsignout]=useState(0)
let [Authenticate,setAuthenticate]=useState(0);

console.log(Authenticate)

return (
  <Box sx={{ width: "100%", height: "100%" }}>
    <Router>
      <Header setText={setText} />
      <Routes>
          <Route
            path="/home"
            element={<LiveMatches search={Text ? 1 : 0} trending={Text} />}
          />
              <Route
            path="/"
            element={<LiveMatches search={Text ? 1 : 0} trending={Text} />}
          />
          
          <Route
            path="/UpcomingMatches"

            element={
              <UpcomingMatches search={Text ? 1 : 0} search_movie={Text} />
            }
          />
          <Route path="/PreviousMatches" element={<PreviousMatches />} />
          <Route
            path="/MostViewed"
            element={<MostViewed search={Text ? 1 : 0} search_series={Text} />}
          />

      </Routes>
      <Footer />
    </Router>
  </Box>
);
}

export default Home
