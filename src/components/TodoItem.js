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
      <div style={this.getStyle()}>
      <p>
      <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
      {title}</p>
    
      </div>

    );
  }
}

export default TodoItem;
