import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AuthForm } from './auth-form';
import {theme} from './authStyle';

import { Registration } from '../registration';

export const Auth = () => {
  const [isShownAuthForm, setIsShownAuthForm] = useState(true);
  const [content, setContent] = useState({title: 'sign in', subtitle: 'don\'t have an account?', btn: 'sign up'})

  const handleClick = () => {
    setIsShownAuthForm(!isShownAuthForm);
    const newTitle = (content.title === 'sign in')? 'sign up' : "sign in";
    const newSubtitle = (content.subtitle === 'do you have an account?'? "don't have an account?" : 'do you have an account?');
    const newBtn = (content.btn === 'sign up')? 'sign in' : "sign up";
    setContent({ title: newTitle, subtitle: newSubtitle, btn: newBtn });
  }

  return (
  //  isShownAuthForm &&
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
           {content.title}
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
         
         {
          isShownAuthForm? <AuthForm /> : <Registration />
         }
         

         <Box sx={{display: 'flex'}}>
           <Typography 
             variant="button"
             sx={{
              alignSelf: 'center',
              letterSpacing: '.2rem', 
              color:`${theme.palette.secondary.light}`
             }}
            >
             {content.subtitle}
           </Typography>
           <Button 
             sx={{
              color: `${theme.palette.secondary.main}`,
              letterSpacing: '.2rem'
             }}
             onClick={handleClick}
           > 
             {content.btn}
           </Button>
         </Box>
       </Container>
    </Box>
  )
}
