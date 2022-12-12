import axios from 'axios'
import React, { Component } from 'react'

export default class GetEx extends Component {
  constructor(props){

   super(props)
   this.state={
     posts:[]
   }
  }
   componentDidMount()
   {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      this.setState({posts:res.data})
    })
   }
  render() {
    const {posts}=this.state
    return (
      <div>GetEx
      
      <p>{posts.map((post)=> <td key={post.id}>
                             <tr>{post.title}</tr>
                             <tr>{post.id}</tr>
                             <tr>{post.body}</tr>
                             </td>)}</p>
          </div>
    )
      }
}