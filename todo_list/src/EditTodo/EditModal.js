import React, { useState } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditTodo from './EditTodo';

const EditModal = (props) => {
    const [open, setDialog] = useState(false);
    return (
        <div>
            <Dialog open={open} onClose={e => setDialog(false)}>
                <DialogContent dividers>
                    <EditTodo
                        id={props.id}
                        data={props.data}
                        deadline={props.deadline}
                        setDialog={()=>setDialog(false)} />
                </DialogContent>
            </Dialog>

            <EditOutlinedIcon
                variant="contained"
                color="primary"
                onClick={() => setDialog(true)} />
        </div>

    )
}

export default EditModal;