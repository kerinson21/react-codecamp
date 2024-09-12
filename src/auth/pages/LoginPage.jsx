import { Grid2, Typography, TextField, Button} from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from '../../store';
import { useNavigate } from "react-router-dom";

import { Link as RauterLink } from "react-router-dom";


import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { AuthLayout } from "../layout/AuthLayout";


const validationSchema = Yup.object({
  email: Yup.string().email('Correo electrónico inváldio').required('El correo es requerido'),
  password: Yup.string().min(6, 'La contraseña tiene almenos 6 caracteres').required('La contraseña es requerida')
});

export const LoginPage = () => {
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/auth/login', {
        email: data.email,
        password: data.password,
      });
  
      // Asumimos que la respuesta incluye un token y datos del usuario
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user',JSON.stringify(user));
      if(user){
        navigate('/')
      }
      //context.setToken(token); // Si tienes una función `setToken` en el contexto
    } catch (error) {
      console.error('Error durante el login:', error);
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2 container>
              <Grid2 size={{xs:12}} sx={{ mt: 2}}>
                <TextField 
                  label='Correo' 
                  type='email' 
                  placeholder='kerinson21@gmail.com'
                  fullWidth
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email? errors.email.message: ''}/>
              </Grid2>
              <Grid2 size={{xs:12}} sx={{ mt: 2}}>
                <TextField 
                  label='Contraseña' 
                  type='password' 
                  placeholder='contraseña'
                  fullWidth
                  {...register('password')}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message: ''}/>
              </Grid2>

              <Grid2 container spacing={2} sx={{ mb:2, mt:2}}>
                
                <Grid2 xs={12} md={6}>
                  <Button variant='contained' type="submit">
                    Login
                  </Button>
                </Grid2>
                <Grid2 xs={12} md={6}>
                  <Button variant='autlined' LinkComponent={RauterLink} to='/auth/register'>
                   <PersonAddAlt1Icon/>
                      <Typography sx={{ ml: 1 }}>Registrar</Typography>
                  </Button>
                </Grid2>
              </Grid2>
            </Grid2>
          </form>
    </AuthLayout>
  )
}
