import React, { useState } from 'react';
// import Tabs from '@mui/material/Tabs';
import { Box, Grid,AppBar,Toolbar, Typography, Tab, Tabs,useTheme, useMediaQuery } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Button,IconButton} from '@mui/material';
import DrawerComp from './DrawerComp';


const Navbar = ({links}) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);
    const [value, setvalue] = useState(0)
    const handleChange =(e, val)=>{
        setvalue(val);
    }
    return (
        <AppBar>
        <Toolbar>
       { isMatch ? 
       <>
       <Typography>
        <ShoppingCartIcon />
       </Typography>
       <DrawerComp links={links} />
       </> :
          <Grid sx={{placeItems:'center'}} container>                
                <Grid item xs={2} >
                    <Typography><ShoppingCartIcon/></Typography>
                </Grid> 
                <Grid item xs={6}>
                    <Tabs textColor='inherit' value={value} onChange={handleChange}>
                       {links.map((link,index)=>(
                        <Tab key ={index} label={link}/>
                       ))}                        
                    </Tabs>                    
                </Grid> 
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <Box>
                        <Button sx={{marginLeft:'auto'}} variant="contained">Sign In</Button>
                        <Button sx={{marginLeft:'auto'}} variant="contained">Sign Up</Button>
                        <IconButton sx={{color:'white'}}>{""}<AccountCircleIcon /></IconButton>

                    </Box>                   
                </Grid>             
            </Grid>
            }
                            
        </Toolbar>
        </AppBar>
    );
};

export default Navbar;