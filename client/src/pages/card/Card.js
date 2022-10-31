import React, {useState} from 'react'
import {createTheme} from "@mui/material/styles";
import {Box, Button, Container, CssBaseline, Grid, ThemeProvider, Typography} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {CardForm} from "./cardForm";

const theme = createTheme();
export const Card = () => {
  const [showTranslate, setShowTranslate] = useState(false);
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
          <Typography component='h1' variant='h2'>
            Train your words
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <ArrowBackIosNewIcon />
            </Grid>
            <Grid
              item
              xs={6} md={8}
            >
              <Typography
                component='h3'
                variant='h3'
                sx={{
                  textAlign:'center',
                  paddingTop: 8,
                  paddingBottom: 8,
                  bgcolor: 'warning.light',
                  borderRadius: '30px'
                }}

              >
                Translated word
              </Typography>
            </Grid>
            <Grid item>
              <ArrowForwardIosIcon />
            </Grid>
          </Grid>
          <Button
            onClick={() => setShowTranslate(!showTranslate)}
          >
            {
              showTranslate? 'Hide translation' : 'Show translation'
            }
          </Button>
          {
            showTranslate && <Typography
              component='h3'
              variant='h3'
              sx={{
                padding: 3,
                bgcolor: 'warning.light',
                borderRadius: '10px'
            }}
            >
              Origin word
            </Typography>
          }
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