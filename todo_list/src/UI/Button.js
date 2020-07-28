import React from 'react';
import { Button } from '@material-ui/core';

const CustomButton = (props) => {
    return (
        <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={(e) => props.clicked(e)}
            disabled={props.disabled} >
            {props.text}
        </Button>
    )
}

export default CustomButton;
