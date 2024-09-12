import { Grid2, Typography, TextField, Button, InputLabel,Select, MenuItem, Link } from "@mui/material";

import { Link as RauterLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registrarse">
      <form>
            <Grid2 container>
              <Grid2 size={{xs:12}} sx={{ mt: 2}}>
                <TextField 
                  label='Nombre Completo' 
                  type='text' 
                  placeholder='Nombre Completo'
                  fullWidth/>
              </Grid2>

         
              <Grid2 size={{xs:12}} sx={{ mt: 2}}>
                <TextField 
                  label='Teléfono' 
                  type='text' 
                  placeholder='Telefono'
                  fullWidth/>
              </Grid2>

              <Grid2 size={{xs:12}} sx={{ mt: 2}}>
              <InputLabel id="demo-simple-select-label">Fecha de Nacimiento</InputLabel>
                <TextField 
                  type='date' 
                  fullWidth/>
              </Grid2>

              <Grid2 size={{xs:12}} sx={{ mt: 2}}>
              <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  label="Rol"
                >
                  <MenuItem value={1}>Cliente</MenuItem>
                  <MenuItem value={2}>Admin</MenuItem>
                </Select>
              </Grid2>

              
              <Grid2 size={{xs:12}} sx={{ mt: 2}}>
                <TextField 
                  label='Correo Electrónico' 
                  type='email' 
                  placeholder='ejemplo@gmail.com'
                  fullWidth/>
              </Grid2>

              <Grid2 size={{xs:12}} sx={{ mt: 2}}>
                <TextField 
                  label='Contraseña' 
                  type='password' 
                  placeholder='contraseña'
                  fullWidth/>
              </Grid2>

              <Grid2 container spacing={2} sx={{ mb:2, mt:2}}>
                <Grid2 size={{xs:12}}>
                  <Button variant='contained'>
                    Crear
                  </Button>
                </Grid2>
                <Grid2 container justifyContent='end'>
                <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                  <Link component={ RauterLink } color="inherit" to='/auth/login'>
                    Ingresar
                  </Link>
              </Grid2>
              </Grid2>
            </Grid2>
            
          </form>
    </AuthLayout>
  )
}