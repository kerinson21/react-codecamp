import { Routes, Route} from 'react-router-dom';
import { CarHomePage } from '../pages/CarHomePage';

export const CarRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <CarHomePage/> } />
    </Routes>
  )
}
