import React, { useState } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import InputField from '../UI/InputField';
import Button from '../UI/Button';
import db from '../firebase';

const AddTodoModal = (props) => {
    const [open, setDialog] = useState(props.open);
    const [input, setInput] = useState('');

    const AddTodoCollection = (e) => {
        e.preventDefault();
        var id = db.firestore.createId();
        var doc = db.firestore.collection('myCollection').doc(id);
        console.log(doc);
        // db.collection("new User").doc({
        //     task: "scsdcv",
        // });
        setDialog(false)
    }
    return (
        <div>
            <Dialog open={open} onClose={e => setDialog(false)}>
                <DialogContent dividers>
                   <InputField placeholder="Create New Task Folder" setInput={setInput} input={input} /> 
                   <Button clicked={AddTodoCollection} disabled={!input} text="Create" />
                </DialogContent>
            </Dialog>

        </div>

    )
}

export default AddTodoModal;