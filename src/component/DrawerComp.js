import React,{useState} from 'react';
import {Drawer,IconButton, ListItemButton} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {List,ListItemText,ListItemIcon} from '@mui/material';

const DrawerComp = ({links}) => {
    const [open, setOpen] = useState(false);
  
    return (
        <>
            <Drawer PaperProps={{sx:{backgroundColor:'blue'}}} open={open} onClose={()=>setOpen(false)}>
                <List>
                  {links.map((link,index)=>(
                      <ListItemButton onClick={()=>setOpen(false)} key={index} divider>
                      <ListItemIcon>
                          <ListItemText sx={{color:'white'}}>{link}</ListItemText>
                      </ListItemIcon>
                  </ListItemButton>
                  ))}
                </List>
            </Drawer>
            <IconButton sx={{marginLeft:'auto', color:'white'}} onClick={()=>setOpen(!open)}>
                <MenuRoundedIcon />
            </IconButton>
             
        </>
    );
};

export default DrawerComp;