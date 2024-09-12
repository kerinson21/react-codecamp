import { Box} from '@mui/system';

import { NavBar } from '../components';
import { SideBar } from '../components/SideBar';


// anchura de la caja
const drawerWidth = 240;
export const ShopLayout = ( { children } ) => {
  return (
    <Box sx={{ display: 'flex'}}>
        {/* Barra de navegacion */}
        <NavBar drawerWidth={ drawerWidth}/>

        {/* Barra de navegacion lateral */}
        <SideBar drawerWidth={ drawerWidth }/>

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}>
            {/* Barra de herramientas */}
            { children }
        </Box>

    </Box>
  )
}
