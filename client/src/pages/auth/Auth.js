import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AuthForm } from './auth-form';
import {theme} from './authStyle';

export const Auth = () => {
  return (
    <Box sx={{bgcolor: `${theme.palette.primary.light}`, color: `${theme.palette.secondary.main}`}}>
       <Container
         maxWidth='sm' 
         sx={{ 
           bgcolor: `${theme.palette.primary.main}`, 
           height: '100vh', 
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           flexDirection: 'column', 
           textTransform: 'upperCase', 
         }}
       >
         <Typography 
           variant="h4" 
           gutterBottom 
           sx={{letterSpacing: '.2rem'}}
         >
           sign in
         </Typography>
         <Typography 
           variant="subtitle1" 
           sx={{
             letterSpacing: '.2rem', 
             color:`${theme.palette.secondary.light}`
           }}
           >
           to get access
         </Typography>
         <AuthForm />

         <Box sx={{display: 'flex'}}>
           <Typography 
             variant="button"
             sx={{
              alignSelf: 'center',
              letterSpacing: '.2rem', 
              color:`${theme.palette.secondary.light}`
             }}
            >
             Don't have an account?
           </Typography>
           <Button sx={{
                     color: `${theme.palette.secondary.main}`,
                     letterSpacing: '.2rem'
                   }}
           > 
             Sign up 
           </Button>
         </Box>
       </Container>
    </Box>
  )
}
