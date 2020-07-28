import React from 'react';
import TodoListItem from './TodoListItem';
const TodoList = (props) => {
    return (
        props.todos.map(elm => {
            return <TodoListItem  
                        data={elm.todo} 
                        key={elm.id} 
                        id={elm.id} 
                        deadline={elm.deadline} 
                        completed = {elm.completed}
                        pending={elm.pending} />
          })
    )
}

export default TodoList;



