import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Layout from './components/layout';
class App extends Component{
  //State is what components can accsess
  state={
    todos :[
      { id:1,
        title:'Take out the trash',
        completed:false
      },
      { id:2,
        title:'Wash the dashes',
        completed:false
      },
      { id:3,
        title:'Dinner with wife',
        completed:true
      }
    ]
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
  this.setState({todos : this.state.todos.filter(
  /*We are only returning the id that do not match
  *that do not match the ones we already have
  */
    todo =>todo.id !=id
  )})
}

//This add a todo
AddTodo =(title) =>{
  console.log(title)
}

  //Tis method render the display
  render (){
     
    console.log(this.state.todos)
    return( 
      <div className="App"  class="container">
       
     <Layout/>
     <AddTodo  AddTodo ={this.AddTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo}
      />
      </div>

    );
  }
}

export default App;
