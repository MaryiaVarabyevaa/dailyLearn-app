import React, {useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isClicked, setIsClicked] = useState(false);
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    };
    const onBlur = () => {
        setIsClicked(true);
    };
    return {
        value,
        onChange,
        onBlur,
        isClicked,
        ...valid
    }
};