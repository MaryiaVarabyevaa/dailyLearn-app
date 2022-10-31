import React from 'react';
import {theme} from "./cardFormStyle";
import {Box, Button, Container, CssBaseline, TextField, ThemeProvider} from "@mui/material";


export const CardForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component='form' noValidate sx={{mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id='foreign-word'
              label='Foreign word'
              name="foreignWord"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id='original-word'
              label='Original word'
              name="originalWord"
              autoFocus
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{mt: 3, mb: 2}}
            >
              Add a word
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}