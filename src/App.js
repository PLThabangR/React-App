import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'

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
  console.log("Clicked id is",id)
  
}

  //Tis method render the display
  render (){
     
    console.log(this.state.todos)
    return( 
      <div className="App" >
      
     
      <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>

    );
  }
}

export default App;
