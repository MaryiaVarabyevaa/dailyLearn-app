import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
// react-hook-form работает с некотролируемыми компонентами (обычный реакт с контролируемыми)
// Controller облегчает работу с контролируемыми компонентами MUI
import { useForm, Controller, useFormState } from "react-hook-form";
import {emailValidation, passwordValidation} from './validation';
import {theme} from './authFormStyle';

export const AuthForm = () => {
  // handleSubmit ф-я, которая получает данные их формы, если проверка прошла успешно
  // объект control содержит методы для регистрации компонентов в React Hook Form.
  const {handleSubmit, control} = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  console.log()
  const {errors} = useFormState({
    control
  });
  // с помощью этого можно отправлять на сервер
  const onSubmit = (data) => console.log(data);
  return <>
    <form 
      style={{  
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </form>
  </>
}