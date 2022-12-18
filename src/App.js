import React from 'react'
import Home from './Components/Home'
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
 
    return (
      <Auth0Provider
        domain="dev-8keebp2xiuq252qr.us.auth0.com"
        clientId="DMLaFCh3dDEJnENyPmNkL3ECaiATI8Ri"
        redirectUri={window.location.origin+'/home'}

      >
        <Home />
        
      </Auth0Provider>
    );

}

export default App
