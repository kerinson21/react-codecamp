import { ShopLayout } from "../layout/ShopLayout"
import CloseIcon from '@mui/icons-material/Close';
import { Grid2, TextField, Box, Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import axios from '../../store';

import { DataGrid } from '@mui/x-data-grid';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import { ShoppingCartContext } from '../../context';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const validationSchema = Yup.object({
  direccion: Yup.string().required('La dirección es requerida'),
  telefono: Yup.string().min(8, 'El telefono es de minimo 8 caracteres').required('Es requerido')

});

export const CarDetalles = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const context = useContext(ShoppingCartContext);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 150,
      editable: false,
    },
    {
      field: 'producto',
      headerName: 'Producto',
      width: 150,
      editable: false,
    },
    {
      field: 'precio',
      headerName: 'Precio',
      width: 150,
      editable: false,
    },
    {
      field: 'cantidad',
      headerName: 'Cantidad',
      width: 150,
      editable: false,
    },
    {
      field: 'subTotal',
      headerName: 'SubTotal',
      width: 150,
      editable: false,
    },
  ]

  const productDetalles = context.products.map(item => ({
    id: item.idProducto,
    producto: item.nombre,
    precio: item.precio,
    cantidad: item.cantidad,
    subTotal: item.cantidad * item.precio
  }
  ));

  const totalizado = () => {
    let suma = 0;
    productDetalles.forEach(item => {
      suma += item.subTotal; // Reasignar el valor acumulado
    });
    return suma;
  };


  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/ordenes', 
        {
        orden: {
          idUsuario: context.user.idUsuario,
          idEstado: 16,
          nombre_completo: context.user.nombre_completo,
          direccion: data.direccion,
          telefono:data.telefono,
          correo: context.user.correo_electronico,
          fecha_entrega: '2024-09-17',
          total_orden: totalizado()
         },
            detalles: productDetalles.map(item => (
              {
                idProducto: item.id,
                cantidad: item.cantidad,
                precio: item.precio,
                subTotal: item.subTotal
              }
            ))
      }
    );
        navigate('/')
        context.setCardProducts([])
        context.setCount(0)
    } catch (error) {
      console.error('Error durante el login:', error);
    }
  };

  return (
    <ShopLayout>
      <h2>Detalles del carrito</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container spacing={2}>
              <Grid2  size={{xs:2, md:4}}>
                <TextField
                placeholder="Nombre completo"
                label="Nombre Completo"
                fullWidth
                size="large"
                value={context.user.nombre_completo}
                slotProps={{
                  input: {
                    readOnly: true
                  }
                }}
                />
              </Grid2>

              <Grid2 size={{xs:2, md:4}}>
                <TextField
                placeholder="Teléfono"
                label="Teléfono"
                fullWidth
                size="large"
                {...register('telefono')}
                />
              </Grid2>

              <Grid2  size={{xs:2, md:4}}>
                <TextField
                placeholder="Correo electrónico"
                label="Correo Electrónico"
                fullWidth
                size="large"
                value={context.user.correo_electronico}
                />
              </Grid2>

              <Grid2 size={{xs:2, md:8}}>
                <TextField
                placeholder="Dirección"
                label="Dirección"
                fullWidth
                size="large"
                {
                  ...register('direccion')
                }
                />
              </Grid2>
           
               <Grid2 size={{xs:2, md:4}}>
                  <Grid2 container spacing={2}>
                <Button 
                variant="contained"
                startIcon={
                  <CheckIcon/>
                }
                type="submit"
                >
                  Finalizar
                </Button>
                <Button
                variant="contained"
                color="error"
                startIcon={<CloseIcon/>}>
                  Cancelar Compra
                </Button>
                </Grid2>
              </Grid2>
            {/* detalles de los productos */}
            <Grid2 size={{xs:2, md:12}}>
                <Box sx={{height:400, width:'100%'}}>
                  <DataGrid
                    rows={productDetalles} 
                    columns={columns} 
                  />
                </Box>
            </Grid2>

          </Grid2>
         </form>
       </ShopLayout>
  )
}
