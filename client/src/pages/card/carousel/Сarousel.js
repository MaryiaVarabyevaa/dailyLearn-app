import React, {useEffect, useState} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {data} from '../data';
import {Box, Button, Container, Typography} from "@mui/material";
import './style.css';

export const Carousel = () => {
    const [words, setWords] = useState(data);
    const [index, setIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);

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
        <Container className="section">
            <Box className="section-center">
                {words.map((word, wordIndex) => {
                    const { id, originalWord, translatedWord } = word;

                    let position = 'nextSlide';
                    if (wordIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        wordIndex === index - 1 ||
                        (index === 0 && wordIndex === words.length - 1)
                    ) {
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
                                <Typography
                                    variant="h2"
                                    onClick={() => setShowTranslation(!showTranslation)}
                                >
                                    {showTranslation? originalWord : translatedWord}
                                </Typography>
                            </Box>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <ArrowBackIosNewIcon />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <ArrowForwardIosIcon />
                </button>
            </Box>

        </Container>
    )
};