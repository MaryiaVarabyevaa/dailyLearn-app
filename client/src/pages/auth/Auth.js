import React from 'react';
import Box from '@mui/material/Box';
import { AuthForm } from './auth-form';
import './auth.css';

export const Auth = () => {
  return (
    <Box sx={{bgcolor: '#B4B198', color: '#fff'}}>
       <AuthForm />
    </Box>
  )
}
