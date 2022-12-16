import React from 'react'
import Home from './Components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { MostViewed, PastMatches, UpcomingMatches } from "./Bottom/export";

const App = () => {
 
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UpcomingMatches" element={<UpcomingMatches/>} />
          <Route path="/PastMatches" element={<PastMatches/>} />
          <Route path="/MostViewed" element={<MostViewed/>} />
        </Routes>
      </Router>
    );

}

export default App
