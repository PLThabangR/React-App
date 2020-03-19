import React,{Component} from 'react';



class TodoItem extends Component{
    //Change the background style
    getStyle=() =>{
        return {
            background:'silver',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }
//Logic for the check box
  

  //Tis method render the display
  render (){
    //We are pulling certain varible from the props 
      const {id,title} =this.props.todo;
    
    return(
      <div style={this.getStyle()} class="container mt-4">
      <p>
      <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
      {title}</p>
      <button class="btn btn-primary mb-2" onClick={this.props.delTodo.bind(this,id)}>Delete a todo</button>
      </div>

    );
  }
}

export default TodoItem;
