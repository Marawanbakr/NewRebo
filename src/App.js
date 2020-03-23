import React, { Component } from "react";
import Coursform from "./component/Coursform";
import CoursList from "./component/CoursList";
class App extends Component {
  state = {
<<<<<<< HEAD
    courses:[
        {name :"HTML"},
        {name :"CSS"},
        {name :"PHP"},
        {name :"javaScript"},
=======
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "PHP" },
      { name: "javaScript" }
>>>>>>> 29b51e68c1537a7bb515b053ae195a94592af788
    ],
    current: ""
  };

  //UpdateCourse
  updateCourse = e => {
    this.setState({
      current: e.target.value
    });
  };
  //AddCourse
    addCourse = (e)=>{
      e.preventDefault();
      let current = this.state.current;
      let courses = this.state.courses;
      courses.push({name:current})
      this.setState({
        courses:'',
        current:''
      })
    }
  
  
   

  //delete course
  deleteCourse = index => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    });
  };

  //editCourse
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses
    });
  };


  render() {
    const { courses } = this.state;
    const coursList = courses.map((course, index) => {
      console.log(this.state.current)
      return (
        <CoursList
          details={course}
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
        />
      );
    });
    return (
      <section className="App">
        <h2>Add cours</h2>
        <Coursform
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          value={this.state.current}
        />
        <ul>{coursList}</ul>
      </section>

    );
  }
}
export default App;
