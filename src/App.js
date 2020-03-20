import React,{Component} from 'react';
import {BrowserRouter as Router, Route}from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Layout from './components/layout';

import About from './components/About'
import Axios from 'axios';
class App extends Component{
  //State is what components can accsess
  state={
    todos :[
      
    ]
  } 

  componentDidMount(){

    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => this.setState({todos:response.data}))
  }
//we are changing the state of the todo
markComplete = (id) =>{
  //setting the state
  this.setState({todos: this.state.todos.map(todo =>{
     if(todo.id===id){
       todo.completed =!todo.completed
     }
     return todo;

  })});
  
}

//Delete todo
delTodo = (id) =>{
  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then (res=> this.setState({todos : this.state.todos.filter(
    /*We are only returning the id that do not match
    *that do not match the ones we already have
    */
      todo =>todo.id !=id
    )}) )
 
}

//This add a todo
AddTodo =(title) =>{

  Axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed: false

}).then(resp =>   this.setState({todos:[...this.state.todos,resp.data]}));


}

  //Tis method render the display
  render (){
     
 
    return(
      <Router>
      <div className="App"  class="container">
       
     <Layout/>
     <Route exact path="/" render={props =>(
       <React.Fragment>
       <AddTodo  AddTodo ={this.AddTodo}/>
       <Todos todos={this.state.todos} markComplete={this.markComplete}
       delTodo={this.delTodo}
       />
       </React.Fragment>
     )} />

     <Route path="/about"  component={About}/>
     
      </div>
      </Router> 

    );
  }
}

export default App;
