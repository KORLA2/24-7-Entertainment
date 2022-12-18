import React from 'react'
import { Outlet,Navigate,Route } from 'react-router-dom'

const Private = ({Authenticate}) => {

console.log(Authenticate)
  return (

Authenticate?<Outlet/>:<Navigate to='/'/>

    )
}

export default Private
