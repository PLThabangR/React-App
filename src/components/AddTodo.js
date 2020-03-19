import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }
    onSubmit =(e)=>{
        e.preventDefault(); //Prevent the form from sending to default
        this.props.AddTodo(this.state.title);
        this.setState({title:''})
    }
    onChange = (e) => this.setState({title:e.target.value})
    
    render() {
        return (
            <form onSubmit ={this.onSubmit}style={{display:'flex'}}>
                <input type="text"  name="title" style ={{flex:'10',padding:'5'}}placeholder="add Todo" 
                value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="submit" className="btn" style={{flex:'1'}}/>
            </form>
        ) 
    }
}

export default AddTodo
