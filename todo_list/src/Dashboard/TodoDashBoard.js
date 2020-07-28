import React, { useState, useEffect } from 'react';
import db from '../firebase';
import { formatDate } from '../DateTime/formatDate';
import { Grid, Paper, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components';
import TodoList from '../Todolist/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import { device } from '../mediaQueries/device';
import SelectCustom from '../UI/Select';
import {NavLink} from 'react-router-dom';



const styles = {
    cardStyle: {
        width: '95%',
        margin: 'auto',
        padding: '10px',
        marginTop: '30px',
        height: '500px',
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
        [device.mobileL]: {
            width: "85%",
        }
    },
    paperStyle: {
        width: '90%',
        margin: 'auto',
        padding: '20px 5px 10px 20px',
        textAlign: 'center',
        marginTop: '20px',
        justifyContent: 'center',
        [device.mobileL]: {
            width: "85%",
        },
    
    },
    styledLink : {
        color:'white'
    }
}

const CardStyle = styled(Paper)(styles.cardStyle);
const PaperStyle = styled(Paper)(styles.paperStyle);
const StyledLink = styled(NavLink)(styles.styledLink);

const TodoDashBoard = (props) => {

    const [todos, setTodos] = useState([]);
    const [sortName, setSort] = useState('timestamp');
    const [orderName, setOrder] = useState('desc');


    const setOrderString = (value) => {
        if (value === 'Recent Added') {
            setSort('timestamp');
            setOrder('desc');
        } else if (value === 'Upcoming Deadline') {
            setSort('deadline');
            setOrder('asc');
        } else if (value === 'Task Completed') {
            setSort('completed');
            setOrder('desc');
        } else if (value === 'Pending task') {
            setSort('completed');
            setOrder('asc');
        }
    }

    const checkPending = (deadline) => {
        if (deadline < new Date()) {
            return true
        } else
            return false
    }


    useEffect(() => {
        db.collection('todos').orderBy(sortName, orderName).onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    todo: doc.data().task,
                    deadline: formatDate(doc.data().deadline.toDate()),
                    completed: doc.data().completed,
                    pending: checkPending(doc.data().deadline.toDate())
                })
            ))
        })
    }, [sortName, orderName]);


    return (
        <Grid container spacing={3}>
            <PaperStyle elevation={5}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <AddTodo />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <SelectCustom setOrder={setOrderString} />
                    </Grid>
                    <Grid item xs={12} sm={2} >
                        <Fab color="primary" size="small" style={{marginRight:"10px"}} >
                            <AddIcon />
                        </Fab>
                        <Fab color="primary" size="small">
                            <StyledLink to="/"><HomeIcon  /></StyledLink>
                        </Fab>
                    </Grid>
                </Grid>
            </PaperStyle>

            <CardStyle elevation={5}>
                <Grid item xs={12} >
                    <TodoList todos={todos} />
                </Grid>
            </CardStyle>
        </Grid>
    )
}

export default TodoDashBoard;
