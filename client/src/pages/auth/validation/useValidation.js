import React, {useEffect, useState} from 'react';

export const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    useEffect(() => {
        for(let validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ?
                        setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'isEmail':
                    const re =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase()) ? setIsEmail(false) : setIsEmail(true);
                    break;
            }
        }
    }, [value])
    return {
        isEmpty,
        minLengthError,
        isEmail
    }
};