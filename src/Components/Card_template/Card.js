import { Typography } from '@mui/material'
import React from 'react'
import {img} from './config'
const Card = ({image,title,media,date}) => {
  return (
    <div className='container' >
      <img
        src=
          "https://image.tmdb.org/t/p/w300/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg"
    
    style={{height:'100%',width:'100%',objectFit:'contain'}}
      />
      <Typography variant="body">{title.trim(0,10)}</Typography>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem'}}>


      <Typography>{media}</Typography>

      <Typography>{date}</Typography>
</div>
    </div>
  );
}

export default Card
