import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'
import {LiveMatches} from './Bottom/export'
const Home = () => {
  return (
    <Box sx={{width:'100%' ,height:'100%', }}>
  

      <Header/>

<LiveMatches/>

      <Footer/>
    
    </Box>
  
  )
}

export default Home
