import React, { Component } from 'react'; // importing FunctionComponent
import ToDoListItem from './ToDoListItem'
import './component.css'
import Todo from '../types'

type Todos = {
    todos: Todo[]
    deleteTodo: Function
}

class ToDoList extends Component<Todos>{
    onDeleted = (name: string) =>{
        console.log(name);
        this.props.deleteTodo(name);
    }
    render(){
        return(
            <div className="to-do-list">
                {this.props.todos.map((todo, ind)=>{
                    return(<ToDoListItem key={ind}
                                  todo={todo}
                                  onDeleted={this.onDeleted}
                                  />)})}
            </div>
        );
    };
}
  export default ToDoList;