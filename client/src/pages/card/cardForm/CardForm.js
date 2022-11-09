import React, {useEffect, useState} from 'react';
import {theme} from "./cardFormStyle";
import {Box, Button, Container, CssBaseline, TextField, ThemeProvider} from "@mui/material";
import {useInput} from "../../../hooks/useInput";
import {addWordAction} from "../../../store/CardReducer";
import {useDispatch} from "react-redux";
import {addWords} from "../../../http/CardAPI";

const REQUIRED_FIELD = 'Required to fill in';
const CORRECT_VALUE = 'This field should not contain numbers';

export const CardForm = () => {
    const dispatch = useDispatch();
    // const [valueOfOriginalWord, setValueOFOriginalWord] = useState('');
    //
    const originalWord = useInput('', {isEmpty: true, hasNumber: true});
    const translatedWord = useInput('',  {isEmpty: true, hasNumber: true});

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let data  = await addWords(originalWord.value, translatedWord.value);
            console.log(data)

            if(!originalWord.isEmpty && !translatedWord.isEmpty && !translatedWord.hasNumber && !originalWord.hasNumber){
                dispatch(addWordAction(data));

            }
        } catch (err) {
            alert(err.response.data.message)
        }
    };

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
          <Box
              component='form'
              noValidate
              sx={{mt: 1}}
              onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id='translated_word'
              label='Foreign word'
              name="foreignWord"
              autoFocus
              value={translatedWord.value}
              onChange={(e) => translatedWord.onChange(e)}
              onBlur={() => translatedWord.onBlur()}
              error={
                  (translatedWord.isClicked && translatedWord.isEmpty) ||
                  (translatedWord.isClicked && translatedWord.hasNumber)
              }
              helperText={
                `${translatedWord.isClicked && translatedWord.isEmpty ? REQUIRED_FIELD : ''}` ||
                  `${(translatedWord.isClicked && translatedWord.hasNumber) ? CORRECT_VALUE : ''}`
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id='original_word'
              label='Original word'
              name="originalWord"
              value={originalWord .value}
              onChange={(e) => originalWord .onChange(e)}
              onBlur={() => originalWord .onBlur()}
              error={
                (originalWord.isClicked && originalWord.isEmpty) ||
                  (originalWord.isClicked && originalWord.hasNumber)
              }
              helperText={
                `${originalWord.isClicked && originalWord.isEmpty ? REQUIRED_FIELD : ''}` ||
                  `${(originalWord.isClicked && originalWord.hasNumber) ? CORRECT_VALUE : ''}`
              }
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{mt: 3, mb: 2}}
              onClick={() => handleSubmit()}
            >
              Add a word
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}