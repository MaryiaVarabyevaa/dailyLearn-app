import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, useFormState } from "react-hook-form";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './registrationStyle';
import { nameValidation, emailValidation, passwordValidation, surnameValidation } from './validation';
import { registration } from '../../http/userAPI';

export const Registration = () => {
  const {handleSubmit, control} = useForm({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: ''
    }
  });
  const {errors} = useFormState({
    control
  });

  const onSubmit = async (data) => {
    const response = await registration(data.email, data.password);
    console.log(response);
  }
  // с помощью этого можно отправлять на сервер
  // const onSubmit = (data) => console.log(data);

  return (
    <ThemeProvider theme={theme}>
    <form
      style={{  
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
          control={control}
          name='name'
          // field функция, которая отправляет входное значение в библиотеку.
          // не нужно использовать useState для контроля формы, здесь это все лежит в field
          rules={ nameValidation }
          render={({field}) => (
            <TextField
              label="name"
              type="text"
              variant="standard"
              size="small"
              sx={{input: {color: `${theme.palette.primary.main}` ,letterSpacing: '.1rem'}}}
              onChange={(e) => field.onChange(e)}
              value={ field.value }
              error={ !!errors.email?.message}
              helperText={errors.email?.message }
            />
          )}
      />
      <Controller
          control={control}
          name='surname'
          // field функция, которая отправляет входное значение в библиотеку.
          // не нужно использовать useState для контроля формы, здесь это все лежит в field
          rules={ surnameValidation }
          render={({field}) => (
            <TextField
              label="last name"
              type="text"
              variant="standard"
              size="small"
              margin="dense"
              sx={{input: {color: `${theme.palette.primary.main}` ,letterSpacing: '.1rem'}}}
              onChange={(e) => field.onChange(e)}
              value={ field.value }
              error={ !!errors.email?.message}
              helperText={errors.email?.message }
            />
          )}
      />
      <Controller
          control={control}
          name='email'
          // field функция, которая отправляет входное значение в библиотеку.
          // не нужно использовать useState для контроля формы, здесь это все лежит в field
          rules={ emailValidation }
          render={({field}) => (
            <TextField
              label="email"
              type="text"
              variant="standard"
              size="small"
              margin="dense"
              sx={{input: {color: `${theme.palette.primary.main}` ,letterSpacing: '.1rem'}}}
              onChange={(e) => field.onChange(e)}
              value={ field.value }
              error={ !!errors.email?.message}
              helperText={errors.email?.message }
            />
          )}
      />
      <Controller
          control={control}
          name='password'
          rules={ passwordValidation }
          render={({field}) => (
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              size="small"
              margin="dense"
              sx={{input: {color: `${theme.palette.primary.main}`, letterSpacing: '.1rem'}}}
              onChange={(e) => field.onChange(e)}
              value={ field.value }
              error={ !!errors.password?.message}
              helperText={errors.password?.message }
            />
          )}
        />

        <Button 
          type="submit"
          variant="contained" 
          sx={{
            width: '50%', 
            m: '16px', 
            alignSelf: 'center', 
            letterSpacing: '.2rem'
          }}
        >
          continue
        </Button>
    </form>
    </ThemeProvider>
  )
}