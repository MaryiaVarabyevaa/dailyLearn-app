import React, {useEffect, useState} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {data} from '../data';
import {Box, Button, Typography} from "@mui/material";
import './style.css';

export const Carousel = () => {
    const [words, setWords] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = words.length - 1;
        if(index < 0) {
            setIndex(lastIndex);
        }
        if(index > lastIndex) {
            setIndex(0);
        }
    })

    return (
        <Box className='section-center'>
            <Button className='prev' onClick={() => setIndex(index - 1)}>
                <ArrowBackIosNewIcon />
            </Button>
            {
                words.map((word, wordIndex) => {
                    const {id, originalWord, translatedWord} = word;
                    let position = 'nextSlide';
                    if(wordIndex === index) {
                        position = 'activeSlide';
                    }
                    if(wordIndex === index - 1 ||
                        // когда activeSlide - эл-т с индеком 0, получается, что
                        // последний эл-т в списке будет lastSlide
                        (index === 0 && wordIndex === words.length - 1)) {
                        position = 'lastSlide';
                    }
                    return (
                        <Box
                            component='article'
                            key={id}
                            className={position}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                           <Typography variant="h2">
                               {translatedWord}
                           </Typography>
                        </Box>

                    )
                })
            }
            <Button className='next' onClick={() => setIndex(index + 1)}>
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    )
};