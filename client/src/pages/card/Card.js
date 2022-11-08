import React, {useState} from 'react'
import {createTheme} from "@mui/material/styles";
import {Box, Button, Container, CssBaseline, Grid, ThemeProvider, Typography} from "@mui/material";
import {CardForm} from "./cardForm";
import {Carousel} from "./carousel/Сarousel";
import {data} from "./data";
import {useSelector} from "react-redux";
import {cardReducer} from "../../store/CardReducer";

const theme = createTheme();

export const Card = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <Typography
              component='h1'
              variant='h2'
          >
            Train your words
          </Typography>
            <Carousel />

          <Button
            onClick={() => setShowForm(!showForm)}
          >
            {
              showForm? 'Hide form' : 'Add more words'
            }
          </Button>
          {
            showForm && <CardForm />
          }
        </Box>
      </Container>
    </ThemeProvider>
  )
}