import { useState, useEffect} from "react";
import { ShopLayout } from "../layout/ShopLayout";
import { CardProduct } from "../components/CardProduct";
import { Grid2 } from "@mui/material";
import apiAxios from "../../store";


export const CarHomePage = () => {
  const [products, setItems] = useState(null);
  useEffect(() => {
    apiAxios.get('/productos')
            .then((resp) => {
              setItems(resp.data.data);
            })
            .catch(error => console.log('Error data', error));
  }, []);
  return (
    
       <ShopLayout>
          <Grid2 container spacing={2}>
            {
              products?.map(product=> {
                return <CardProduct key={product.idProducto} data={product}/>
              })
            }
          </Grid2>
       </ShopLayout>
    
  )
}
