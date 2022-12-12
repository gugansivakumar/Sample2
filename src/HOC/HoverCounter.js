import React, { Component } from 'react'
import EnComponent from './Hoc'
class HoverCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {count:0
    }
  }
  render() {
    return (
      <div>
      {this.props.name};
      <h2 onMouseOver={this.inc}>Click:{this.state.count}</h2></div>
    )
  }
  inc=()=>{this.setState({count:this.state.count+1})}
}
export default EnComponent(HoverCounter);
