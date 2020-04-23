import React, { Component } from 'react';
import ReactDom from 'react-dom'
import './index.css'
import ToDoList from './components/ToDoList'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import Todo from './types'

type State = {
  data: Todo[],
  term: string, 
}


class App extends Component<{}, State>{
  state = {
     data : [
    { name: "Math", important: true},
    { name: "React", important: true},
    { name: "Drink Cofee", important: false}
    ],
    term : "",
  }

  deleteTodo = (name: string) => {
    let newData = this.state.data
    let index = -1;
    newData.map((d, ind) => {
      if(d.name === name){
        index = ind;
      }
    })
    if(index > -1){
      newData.splice(index, 1);
    }
    console.log(newData)
    this.setState((state)=>{
      return{
        data:newData
      }
    })
  }

  onTermChange = (term: string) => {
    this.setState(() =>{
      return {term: term}
    })
  } 

  search = (items: Todo[], term: string) =>{
    if(term.length === 0) return items;
    const res = items.filter((item)=>{
      console.log(item.name.indexOf(term))
      return item.name.indexOf(term) > -1
    });
    return res;
  }

  render(){

    const visableItems = this.search(this.state.data, this.state.term);
    console.log(visableItems)

    return (
      <div className='main'>
        <div className='wrapper'>
          <AppHeader />
          <SearchPanel changeTerm={this.onTermChange}/>
          <ToDoList todos={visableItems}
                    deleteTodo={this.deleteTodo}
                    />
        </div>
    </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))