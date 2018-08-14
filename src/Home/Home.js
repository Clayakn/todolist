import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postTask, deleteTask, putTask, getTask} from '../redux/reducer';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor() {
        super()
        this.state={
            title: '',
        }
        this.changeTitle = this.changeTitle.bind(this)
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        }
      
       componentDidMount() {
        this.props.getTask()
       }
      
        changeTitle(title){
          this.setState({
              title,
          })
        }
      
        addTask(){
          this.state.title ? this.props.postTask(this.state.title)  : window.alert('Please insert a title')
          this.setState({
              title: '',
          })
          this.props.getTask()
        }
      
        deleteTask(id){
          this.props.deleteTask(id)
          this.forceUpdate();
        }
      
        completeTask(id){
         this.props.putTask(id)
        }

        render() {
            console.log('this.props', this.props)
            const displayTasks = this.props.list.length ? this.props.list.map((e,i) => {
                return (
                  <div key={i}>
                  <Link to={`/form/${e.id}`}><p style={e.completed ? { textDecoration: 'line-through'} : { textDecoration: 'none'} }>Task: {e.title}</p></Link>
                  <button disabled={e.completed} onClick={ () => this.completeTask(e.id) }>Complete</button>
                  <button onClick={() => this.deleteTask(e.id)}>Delete</button>
                  </div>
                ) 
              })
              : 
              'Loading'
        return (
            <div>
            Let's begin, shall we?
            <h1>TO-DO:</h1>
            {displayTasks}
            <input value={this.state.title} onChange={ (e) => this.changeTitle(e.target.value)  }placeholder='insert title here'/> 
            <button onClick={ () => this.addTask() } >Add new To-do</button>
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

export default connect(mapStateToProps, {postTask, deleteTask, putTask, getTask})(Home);