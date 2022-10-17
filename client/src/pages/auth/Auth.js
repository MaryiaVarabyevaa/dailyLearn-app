import React, {useContext, useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './authStyle';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, WORD_ROUTE} from '../../utils/consts';
import { registration, login } from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from '../../index';

export const Auth = observer(() => {
  const {user} = useContext(Context)
   const location = useLocation();
   const navigate = useNavigate();
   const isLogin = location.pathname === LOGIN_ROUTE;
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleClick = async(e) => {
      e.preventDefault();
      try {
        let data;
        if(isLogin) {
          data = await login(email, password);
        } else {
          data = await registration(email, password);
        }
        user.setUser(user);
        user.setIsAuth(true);
        navigate(WORD_ROUTE);
      } catch(e) {
        alert(e.response.data.message);
      }
   }
    return <ThemeProvider theme={ theme }>
        <Box sx={{bgcolor: `${theme.palette.primary.light}`, color: `${theme.palette.secondary.main}`}}>
          <Container maxWidth='sm' 
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
                {isLogin? 'Sign in' : 'Sign up'}
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
          <form
        style={{  
          display: 'flex',
          flexDirection: 'column',
          width: '50%'
        }}
      >
      <TextField
            label="email"
            type="text"
            variant="standard"
            size="small"
            sx={{input: {color: `${theme.palette.primary.dark}`, letterSpacing: '.1rem'}}}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            input={{color: '#fff'}}
            // onChange={(e) => field.onChange(e)}
            // value={ field.value }
            // error={ !!errors.email?.message}
            // helperText={errors.email?.message }
          />

      <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            size="small"
            margin="dense"
            sx={{input: {color: `${theme.palette.primary.dark}`, letterSpacing: '.1rem'}}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onChange={(e) => field.onChange(e)}
            // value={ field.value }
            // error={ !!errors.password?.message}
            // helperText={errors.password?.message }
          />
      <Button 
        type="submit"
        variant="contained" 
        onClick={handleClick}
        sx={{
          width: '50%', 
          m: '16px', 
          alignSelf: 'center', 
          letterSpacing: '.2rem',
          bgcolor: `${theme.palette.primary.dark}`
        }}
       >
        continue
      </Button>
      </form>
      <Box sx={{display: 'flex'}}>
       <Typography 
           variant="button"
           sx={{
            alignSelf: 'center',
            letterSpacing: '.2rem', 
            color:`${theme.palette.secondary.light}`
           }}
          >
           {
            isLogin? ' Don\'t have an account? ' : ' Do you have an account? '
           }
           
         </Typography>
         <NavLink to={isLogin? REGISTRATION_ROUTE : LOGIN_ROUTE} style={{color: '#fff', letterSpacing: '.1rem', textDecoration: 'none', fontFamily: '"Roboto","Helvetica","Arial", sans-serif', alignSelf: 'center'}}>
          {
            isLogin? "Sign up" : "Sign in"
          }
         </NavLink>
       </Box>
          </Container>
        </Box>
    </ThemeProvider>
})

