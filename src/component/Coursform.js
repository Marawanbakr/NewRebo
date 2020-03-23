import React from 'react'

const Coursform = (props)=>{
    return(
       <form onSubmit={props.addCourse}>
           <input type="text" placeholder="Enter name course..." onChange={props.updateCourse}/>
           <button type="submit">Add course</button>
       </form>
  )  
}


export default Coursform ;