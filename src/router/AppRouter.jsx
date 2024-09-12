import {Route, Routes} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { CarHomePage } from '../car/pages/CarHomePage';
import { AppRouterPrivate } from './AppRouterPrivate';
import { ShopLayout } from '../car/layout/ShopLayout';
import { CarDetalles } from '../car/pages/CarDetalles';
import { ShopHistories } from '../car/pages/ShopHistories';

export const AppRouter = () => {
  return (
    <Routes>

        <Route path='/auth/*' element={ <AuthRoutes/> } />
        {/* autenticado */}
        <Route path='/*' element={
          <AppRouterPrivate>
            <ShopLayout/>
            <CarHomePage/>
          </AppRouterPrivate>
        }/>
       
       <Route path='/finalizar/compra' element={
          <AppRouterPrivate>
            <ShopLayout/>
            <CarDetalles/>
          </AppRouterPrivate>
        }/>
        <Route path='historial/compra' element={
          <AppRouterPrivate>
            <ShopLayout/>
            <ShopHistories/>
          </AppRouterPrivate>
        }/>

    </Routes>
  )
}
