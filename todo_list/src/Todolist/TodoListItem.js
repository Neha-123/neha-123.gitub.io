import React, { useState } from 'react';
import { List, ListItem, ListItemText, Divider, Button } from '@material-ui/core';
import db from '../firebase';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditModal from '../EditTodo/EditModal';
import styled from 'styled-components';

const styles = {
    listTextStyle: {
        color: 'red !important',
        textDecoration: 'line-through !important'
    }
}
const ListTextStyle = styled(ListItemText)(styles.listTextStyle);


const TodoListItem = (props) => {

    const [listText, strikeText] = useState(props.completed);

    const setCompletedItem = () => {
        strikeText(!listText);
        db.collection('todos').doc(props.id).set({
            completed: !listText
        }, { merge: true });
        
    }


    return (
        <div>
            <List >
                <ListItem button>
                    {listText ?
                        <ListTextStyle
                            button onClick={setCompletedItem}
                            primary={props.data}
                            secondary={"Deadline⏲ : " + props.deadline}
                        /> :
                        <ListItemText
                            primaryTypographyProps
                            style={{ color: 'blue' }}
                            button onClick={setCompletedItem}
                            primary={props.data}
                            secondary={props.pending ? <div><span>Deadline⏲ : {props.deadline}</span><span style={{ color: 'red' }}>  ❗❗❗ Missed Deadline⏲</span></div> : <span>Deadline⏲ : {props.deadline}</span>}
                        />
                    }
                    {listText ?
                        null
                        :
                        <EditModal data={props.data} deadline={props.deadline} id={props.id} />
                    }
                    <DeleteForeverOutlinedIcon
                        variant="contained"
                        color="secondary"
                        onClick={event => db.collection('todos').doc(props.id).delete()}
                    />
                </ListItem>
                <Divider />
            </List>
        </div>


    )
}

export default TodoListItem;
