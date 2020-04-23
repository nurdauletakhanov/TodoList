import React, { Component } from 'react';
import DeleteLogo from '../logo/delete.png';
import MarkLogo from '../logo/mark.png';
import './component.css'
import Todo from '../types'

type TodoList = {
    todo: Todo 
    onDeleted: Function
}

type TodoListState = {
    done: boolean
    deleted: boolean
}

class ToDoListItem extends Component<TodoList, TodoListState>{
    constructor(props: TodoList){
        super(props);
        // const {name, important = false} = this.props.todo;
    }
    
    state = {
        done: false,
        deleted: false,
    };

    toDoClick = () => {
        this.setState((state) => {
            return {done: !state.done}
        })
    }

    deleteClick = () => {
        this.setState((state) => {
            return {deleted: !state.deleted}
        })
        this.props.onDeleted(this.props.todo.name)
        console.log('Delete clicked')
    }

    render(){
        const {name, important = false} = this.props.todo;
        const {done} = this.state;

        let classNames = "todo-text";

        if(done){
            classNames += " done";
        }

        return(
            <div className="item">
                <div className={classNames}
                onClick={this.toDoClick}>
                    {name}
                </div>
                <div className="icons">
                    <img src = {MarkLogo} className="logo"/>
                    <img src = {DeleteLogo} className="logo"
                        onClick={this.deleteClick}/>
                </div>
            </div>
        );
    };
}

export default ToDoListItem;