
import { MenuOutlined, ShoppingCart} from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import { Link as RauterLink } from "react-router-dom";

import { AppBar, IconButton, Toolbar,Grid2, Typography, Badge, Popover, List, ListItem, ListItemText, Divider,Button } from "@mui/material"

import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../context';

export const NavBar = ( { drawerWidth = 240}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
    const open = Boolean(anchorEl);
    const id = open ? 'cart-popover' : undefined;
    const context = useContext(ShoppingCartContext);
    const isProduct = context.products.length > 0;
    return (
    <AppBar 
        position="fixed"
        sx={{
            width: {sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth }px`}
        }}>
            <Toolbar>
                <IconButton 
                    color="inherit"
                    edge="start"
                    sx={{ mr:2, display: {sm: 'none'}}}>
                    <MenuOutlined/>
                </IconButton>

                <Grid2 container direction='row' justifyContent="space-between" alignItems='center' sx={{flexGrow: 1}}>
                    <Typography variant="h6" noWrap component='div'>CodeShop</Typography>
                        <IconButton color="inherit" aria-describedby={id} onClick={handleClick}>
                            <Badge badgeContent={context.count}>
                                <ShoppingCart/>
                            </Badge>
                         </IconButton>
                </Grid2>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}>
                        <List style={{ width: '500px', padding: '10px' }}>
                            {context.products.length > 0 ? (
                                context.products.map(product => (
                                <React.Fragment key={product.idProducto}>
                                    <Grid2 container spacing={2} alignItems="center" justifyContent="space-between">
                                    <Grid2 xs={4}>
                                        {/* Imagen del producto */}
                                        <img
                                        src={`data:image/jpeg;base64,${product.foto}`}
                                        alt={product.nombre}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            objectFit: 'cover', // Para asegurarnos de que la imagen no se distorsione
                                            borderRadius: '8px', // Borde redondeado para un mejor aspecto
                                        }}
                                        />
                                    </Grid2>

                                    <Grid2 xs={6}>
                                        {/* Nombre y precio del producto */}
                                        <ListItemText
                                        primary={product.nombre}
                                        secondary={`Q${product.precio.toFixed(2)}`}
                                        primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }} // Añadir un poco de estilo
                                        secondaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
                                        />
                                    </Grid2>
                                    <Grid2 xs={2}>
                                        <ListItemText primary="Cantidad" secondary={product.cantidad}/>
                                    </Grid2>
                                    <Grid2 xs={2}>
                                        {/* Botón de eliminar */}
                                        <IconButton>
                                        <DeleteIcon color="error" />
                                        </IconButton>
                                    </Grid2>
                                    
                                    </Grid2>
                                    <Divider sx={{ my: 1 }} /> {/* Separador entre productos */}
                                </React.Fragment>
                                ))
                            ) : (
                                <ListItem>
                                <ListItemText primary="El carrito está vacío" />
                                </ListItem>
                            )}
                            </List>
                            {
                                isProduct ?
                                (<Grid2 container spacing={2} sx={{padding: 2}}>
                                <Button variant="contained" color="primary" LinkComponent={RauterLink} to='/finalizar/compra'>
                                        Finalizar Compra
                                    </Button>
                                    <Button variant="contained" color="error" onClick={()=>{
                                        context.setCardProducts([]);
                                        context.setCount(0);
                                    }}>
                                        Concelar Compra
                                    </Button>
                                </Grid2>):''
    
                            }
                </Popover>

            </Toolbar>
    </AppBar>
    )
}
