import React, { useState } from 'react';
import { Grid, Fab, Tooltip } from '@material-ui/core';
import db from '../firebase';
import firebase from 'firebase';
import InputField from '../UI/InputField';
import SetDeadline from '../DateTime/Setdeadline';
import Button from '../UI/Button';
import styled from 'styled-components';

const styles = {
    gridStyle: {
        backgroundColor: "#c0c8ff4f",
        width: '50%',
        marginTop:'10%',
        margin: 'auto'
    },

}
const GridStyle = styled(Grid)(styles.gridStyle);



const AddTodo = (props) => {
    const [input, setInput] = useState('');
    const [selectedDate, handleDateChange] = useState(null);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        db.collection('todos').add({
            task: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            deadline: selectedDate,
            completed: false
        });
        setInput('');
        handleDateChange(null);
    }

    return (

        <form >
            <GridStyle container spacing={3} justify="center">
                <Grid item xs={12} sm={2} >
                    <InputField placeholder="Add New Todo" setInput={setInput} input={input} />
                </Grid>
                <Grid item xs={12} sm={2} >
                    <SetDeadline clearable input={input} placeholder="Set the Deadline" selectedDate={selectedDate} handleDateChange={handleDateChange} />
                </Grid>
                <Grid item xs={12} sm={2} >
                    <Button
                        clicked={onSubmitHandler}
                        disabled={(!input || !selectedDate) ? true : false}
                        text="Add" />
                </Grid>
                
            </GridStyle>
        </form>

    )
}

export default AddTodo;


