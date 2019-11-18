import React from 'react'

//functional component just need to return some JSX
const Comment = (props) => {
  return <p>{props.content} - {props.author}</p>
}
//convert between function and class
//write a function
//return some JSX
//take in props as a parameter
//this.props.content => props.content


//class component
// class Comment extends React.Component{
//   render(){
//     console.log("Comment's props:", this.props)
//     // debugger
//     return (
//       <p>{this.props.content} - {this.props.author}</p>
//     )
//   }
// }

export default Comment
