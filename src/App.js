import React, { Component } from 'react';
import Coursform from './component/Coursform';
import CoursList from './component/CoursList'
 class App extends Component {
  state = {
    courses:[
        {name :"HTML"},
        {name :"CSS"},
        {name :"PHP"},
        {name :"javaScript"},
    ],
    current :''
  }
  //UpdateCourse
  updateCourse = (e)=>{
    this.setState({
      current:e.target.value
    })
  }
  //AddCourse
    addcourse = (e)=>{
      e.preventDefault();
      let current = this.state.current;
      let courses = this.state.courses;
      courses.push({name:current})
      this.setState({
        courses,
        current:''
      })
    }
  render() {
    const {courses} = this.state;
    const coursList = courses.map(( course , index)=>{
     return <CoursList details={course}key={index}/>
    })
    return( 
      <section className="App">
          <h2>Add cours</h2> 
          <Coursform updateCourse={this.updateCourse} addCourse={this.addCourse}/>
         <ul>{coursList}</ul>
      </section>
   );
 }
} 
export default App; 
