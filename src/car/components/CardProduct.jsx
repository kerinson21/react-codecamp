import { Card, CardMedia, CardContent, Typography, IconButton, Box, Chip, Grid2 } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

export const CardProduct = ({data}) => {
  const context = useContext(ShoppingCartContext);
  

  const addProductCar = (productData)=>{
    context.setCount(context.count + 1);

    const existProduct = context.products.some(product => product.idProducto === productData.idProducto);
    if(existProduct){
      const updatedProducts = context.products.map(product => 
        product.idProducto === productData.idProducto 
          ? { ...product, cantidad: product.cantidad + 1 } 
          : product
      );
      context.setCardProducts(updatedProducts)
    }else{
      context.setCardProducts([...context.products, {...productData, cantidad: 1}])
    }
    
    
  }
  
 
  return (
      <Card sx={{ maxWidth: 345 }}>
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              sx={{
                width: '240px',
                height: '240px',
                objectFit: 'cover'
              }}
              image={`data:image/jpeg;base64,${data.foto}`}
              alt="Producto"
            />
            <Chip
              label={data.marca}
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
              }}/>
            {/* Botón de agregar */}
            <IconButton
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'white',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: 'white'
                }
              }}
              onClick={() => addProductCar(data)}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>

          {/* Contenido de la tarjeta */}
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h6">{data.nombre}</Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Q. {data.precio} </Typography>
          </CardContent>
        </Card>
  )
}
