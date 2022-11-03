import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {theme} from "./authStyle";
import {CARD_ROUTE} from "../../utils/consts";
import {useInput} from "./validation/useInput";

export const Auth = () => {
  const [user, setUser] = useState(true);
  const email = useInput('', {isEmpty: true, isEmail: true});
  const password = useInput('', {isEmpty: true, minLength: 6});
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
    // useEffect(() => {
    //     console.log(emailError)
    //     // console.log('isClicked: ' + email.isClicked);
    //     // console.log('isEmpty: ' + email.isEmpty);
    //     // console.log('isEmail: ' + email.isEmail);
    //     if(email.isClicked && email.isEmpty) {
    //         setEmailError('Required to fill in');
    //     }
    //     if(email.isClicked && email.isEmail) {
    //         setEmailError('Enter the correct value');
    //     }
    //
    // }, [email.value])
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!email.isEmpty && !email.isEmail && !password.minLengthError){
            navigate(CARD_ROUTE);
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
                      autoFocus
                      value={email.value}
                      onChange={e => email.onChange(e)}
                      onBlur={() => email.onBlur()}
                      error={
                        (email.isClicked && email.isEmpty) || (email.isClicked && email.isEmail)

                      }
                      helperText={
                        `${email.isClicked && email.isEmpty ? 'Required to fill in' : '' }` ||
                      `${(email.isClicked && email.isEmail) ? 'Enter the correct value' : ''}`
                    }
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
                      value={password.value}
                      onChange={e => password.onChange(e)}
                      onBlur={e => password.onBlur(e)}
                      error={
                          (password.isClicked && password.isEmpty) || (password.isClicked && password.minLengthError)
                      }
                      helperText={`${password.isClicked && password.isEmpty ? 'Required to fill in' : ''}` ||
                          `${password.isClicked && password.minLengthError? 'Password must contain at least 6 characters' : ''}`}

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

