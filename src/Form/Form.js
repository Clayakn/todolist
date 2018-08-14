import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { patchTask, putTask, deleteTask } from '../redux/reducer';


 class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            completed: '',
            task: ''
        }
    }
    componentDidMount() {
        const index = this.props.list.findIndex(e => e.id === +this.props.match.params.id)
        console.log('index', index)
        const task = this.props.list.splice(index,1)
        console.log('task', task)
        this.setState({
            task,
            title: task[0].title,
            description: task[0].description,
            completed: task[0].completed
        })
    }

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
       }

    cancel() {
        this.setState({
            title: this.state.task[0].title,
            description: this.state.task[0].description,
            completed: this.state.task[0].completed
        })
    }

    saveTask() {
        this.props.patchTask(+this.props.match.params.id,this.state.title, this.state.description, this.state.completed)
    }

    deleteTask() {
        this.props.deleteTask(+this.props.match.params.id)
    }

    completeTask() {
        this.props.putTask(+this.props.match.params.id)
    }

    render() {
    return (
    <div>
        <h1>URL params: {this.props.match.params.id}</h1>
        <Link to='/'>Back to Tasks</Link>
        <br/>
        <input name='title' value={this.state.title} onChange={(e) => this.handleInput(e)} placeholder='title'/>
        <Link to='/'><button onClick={ () => this.completeTask() }>Complete</button></Link>
        <textarea name='description' value={this.state.description} onChange={(e) => this.handleInput(e)}></textarea>
        <Link to='/'><button onClick={ () => this.saveTask() }>Save</button></Link>
        <button onClick={() => this.cancel()}>Cancel</button>
        <Link to='/'><button onClick={ () => this.deleteTask() }>Delete</button></Link>
        
    </div>
    )
    }
}

const mapStateToProps = state => {
    const { list } = state 
    return {
        list
    }
}

export default connect(mapStateToProps, { patchTask, putTask, deleteTask })(Form);