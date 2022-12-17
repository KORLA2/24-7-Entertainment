import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'
import {
  MostViewed,
  PreviousMatches,
  UpcomingMatches,
  LiveMatches
} from "./Bottom/export";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>

      <Router>
      <Header />
        <Routes>
          <Route path="/home" element={<LiveMatches />} />
          <Route path="/UpcomingMatches" element={<UpcomingMatches />} />
          <Route path="/PreviousMatches" element={<PreviousMatches/>} />
          <Route path="/MostViewed" element={<MostViewed/>} />
        </Routes>
      <Footer />
      </Router>

    </Box>
  );
}

export default Home
