import React from 'react'
import Home from './Components/Home'
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
 let domain = process.env.REACT_APP_AUTH0_DOMAIN;
 let clientId= process.env.REACT_APP_AUTH0_CLIENT_ID
 

    return (
      <Auth0Provider
        domain = "movies-app.us.auth0.com"
        clientId= "R7npFdM1IlC83mTlCEeDubANYAZbJklC" 
        redirectUri={'https://d3pznlcqkeotbh.cloudfront.net/Movies'}
      >
        <Home />
        
      </Auth0Provider>
    );

}

export default App
