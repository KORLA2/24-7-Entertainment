import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from '@mui/material';
import {useAuth0} from '@auth0/auth0-react'
const Auth = ({setsignout}) => {


    let {loginWithRedirect,user,isLoading ,isAuthenticated}=useAuth0()

    const [value, setValue] = React.useState('1');
  console.log(isAuthenticated)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
if (user) setsignout(1);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="SignIn" value="1" />
            <Tab label="SignUp" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Button onClick={()=>{

loginWithRedirect();


        }}>SignIn</Button>
        </TabPanel>
      
        <TabPanel value="2"><Button >SignUp</Button></TabPanel>
      
      </TabContext>

    </Box>
 
  )
}

export default Auth
