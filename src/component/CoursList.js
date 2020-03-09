import React, { Component , Fragment } from 'react';

 class CoursList extends Component{
   render() {
     return(
       <Fragment>
         <li>
           {this.props.details.name}
         </li>
       </Fragment> 
     );
   }
 }
export default CoursList;
  