import React from "react";

const Coursform = props => {
  return (
    <form onSubmit={props.addCourse}>
      <input type="text" onChange={props.updateCourse} value={props.value} />
      <button type="submit">Add course</button>
    </form>
  );
};
export default Coursform;
