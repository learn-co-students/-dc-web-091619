import React, {Component} from 'react'
import Comment from './Comment'

//static data source
let commentsArray = [
  {id: 1, content: "hi", author: "Jenny"}, //c
  {id: 2, content: "hey", author: "Joe"},
  {id: 3, content: "hello", author: "Ann"},
  {id: 4, content: "what's up", author: "Bruno"}
]

//dynamic data source?

class CommentBox extends Component{
  render(){
    return (
      <div className="comment-box">
        ComentBox
        {
          commentsArray.map((c, index) => <Comment
            key={c.id}
            content={c.content}
            author={c.author}/>
          ) //map [commentObj] => [<Comment />]
        }
      </div>
    )
  }
}

/*
<div className="comment-box">
  ComentBox
  {
    commentsArray.map(c => <Comment
      content={c.content}
      author={c.author}/>
    ) //map [commentObj] => [<Comment />]
  }
</div>
*/
export default CommentBox
