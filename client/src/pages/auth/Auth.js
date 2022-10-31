import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {theme} from "./authStyle";
import {CARD_ROUTE} from "../../utils/consts";
import {emailValidation, passwordValidation} from "./validation";

export const Auth = () => {
  const [user, setUser] = useState(true);
  const [emailError, setEmailError]  = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [password, setPasswod] = useState('new password');
  const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        try {
          const obj = emailValidation(data.get('email'));
          console.log(obj)
          // if(emailError.length !== 0 || passwordError.length !== 0) {
          //   throw new Error('Ops, something wrong')
          // } else {
          //   navigate(CARD_ROUTE);
          // }
        } catch (e) {
          alert(e)
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                  sx={{
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                  }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                      <LockOutlinedIcon />
                    </Avatar>
                  <Typography component='h1'  variant='h5'>
                    {
                      user? 'Sign in' : 'Sign up'
                    }
                  </Typography>
                  <Box component='form' onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id='email'
                      label='Email address'
                      name="email"
                      autoComplete='email'
                      error={emailError}
                      helperText={emailError}
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      type='password'
                      id='password'
                      label='Password'
                      name="password"
                      autoComplete='password'
                      error={passwordError}
                      helperText={passwordError}
                      autoFocus
                    />
                    <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      sx={{mt: 3, mb: 2}}
                    >
                      Continue
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href='#' variant='body2' onClick={()=>setUser(!user)}>
                          {user? 'Don\'t have an account? Sign up' : 'Do you have an account? Sign in'}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

