import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import db from '../firebase';
import SetDeadline from '../DateTime/Setdeadline';
import Button from '../UI/Button';
import InputField from '../UI/InputField';

const EditTodo = (props) => {
    const [input, setInput] = useState(props.data);
    const [selectedDate, handleDateChange] = useState(props.deadline);

    const onUpdateHandler = (e) => {
        e.preventDefault();
        db.collection('todos').doc(props.id).set({
            task: input
        }, { merge: true });

        if(selectedDate !== props.deadline ) {
            db.collection('todos').doc(props.id).set({
                deadline: selectedDate 
            }, { merge: true })
        }
        props.setDialog(false);
    }

    return (
        <form>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={4} >
                    <InputField setInput={setInput} input={input} />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <SetDeadline
                        input={input}
                        placeholder={props.deadline}
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange} />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Button
                        clicked={onUpdateHandler}
                        disabled={!input} 
                        text= "Update" />
                </Grid>
            </Grid>
        </form>
    )

}


export default EditTodo;
