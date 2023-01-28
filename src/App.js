import React from 'react'
import Home from './Components/Home'
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
 
    return (
      <Auth0Provider
        domain="movies-app.us.auth0.com"
        clientId="R7npFdM1IlC83mTlCEeDubANYAZbJklC"
        redirectUri={'http://localhost:3000/Trending'}
      >
        <Home />
        
      </Auth0Provider>
    );

}

export default App
