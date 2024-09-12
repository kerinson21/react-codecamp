import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemText, ListItemButton, Grid2,ListItemIcon } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as RauterLink } from "react-router-dom";

import CategoryIcon from '@mui/icons-material/Category';
import { useEffect, useContext } from 'react';


import { ShoppingCartContext } from '../../context';

export const SideBar = ({ drawerWidth }) => {

    
    const context = useContext(ShoppingCartContext)
    
   

    useEffect(() => {
        // Recuperar el usuario de localStorage
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
        context.setUser(JSON.parse(storedUser));  // Convertir de JSON a objeto JavaScript
        }
    }, []); // El useEffect se ejecuta al montar el componente
    

  return (
    <Box 
        component='nav'
        sx={{ 
            width: { sm: drawerWidth }, 
            flexShrink: { sm: 0 },
            zIndex: 0
            }}>
        
            <Drawer
                variant='permanent'
                sx={{ 
                    display: { xs: 'block' }, 
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', 
                    width: drawerWidth}
                    }}>

                    <Toolbar>
                        <AccountCircleIcon/>
                        <Typography variant='h6' sx={ { ml: 2}} > {context.user.nombre_completo} </Typography>
                    </Toolbar>
                    <Divider/>

                    <List>
                      
                        <ListItem key={1} disablePadding>
                            <ListItemButton LinkComponent={RauterLink} to='historial/compra'>
                                <ListItemIcon>
                                    <CategoryIcon />
                                </ListItemIcon>
                                <Grid2 container>
                                    <ListItemText primary={ 'Historial' } />
                                </Grid2>
                            </ListItemButton>
                        </ListItem>

                        

                    </List>


            </Drawer>

    </Box>
  )
}
