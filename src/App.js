import React from 'react'
import Home from './Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
 
    return (


<Router>

<Routes>

<Route  path='/' element={<Home/>}></Route>

</Routes>
</Router>

  )

}

export default App
