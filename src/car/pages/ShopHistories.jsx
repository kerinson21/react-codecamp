import { Grid2, Box } from "@mui/material"
import { ShopLayout } from "../layout/ShopLayout"
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../store';
import { ShoppingCartContext } from '../../context';
import { useContext, useState, useEffect } from "react";

const columns = [
    {
        field: 'idOrden',
        headerName: 'ID',
        width: 150,
        editable: false,
    },
    {
      field: 'estado',
      headerName: 'Estado',
      width: 150,
      editable: false,
    },
    {
      field: 'direccion',
      headerName: 'Dirección',
      width: 150,
      editable: false,
    },
    {
      field: 'telefono',
      headerName: 'telefono',
      width: 150,
      editable: false,
    },
    {
        field: 'total_orden',
        headerName: 'Total Orden',
        width: 150,
        editable: false,
      },
]



export const ShopHistories = () => {
    const context = useContext(ShoppingCartContext);
    const [ordenes, setOrdenes] = useState([]);
    useEffect(() => {
        const fetchData = async ()=>{
            try {
             const resp = await axios.get(`/ordenes/myordenes/${context.user.idUsuario}`)
             setOrdenes(resp.data);
             console.log(resp.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])


  return (
    <ShopLayout>
        <h1>Historial de compras</h1>
        <Grid2 container>
            <Grid2 size={{xs:2, md:12}}>
                    <Box sx={{height:400, width:'100%'}}>
                    <DataGrid
                        row={ordenes}
                        columns={columns} 
                    />
                    </Box>
                </Grid2>
        </Grid2>
    </ShopLayout>
  )
}
