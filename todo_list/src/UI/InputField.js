import React, {useState} from 'react';
import { Input } from '@material-ui/core';

const InputField = (props) => {
   
    return (
        <Input
            autoFocus
            placeholder= {props.placeholder}
            value={props.input}
            onChange={(e) => props.setInput(e.target.value)} />
    )
}

export default InputField;
