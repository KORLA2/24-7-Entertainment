import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const Private = () => {

let {user} =useAuth0();

  return (

user?<Outlet/>:<Navigate to='/'/>

    )
}

export default Private
