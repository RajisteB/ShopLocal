import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Frame = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Frame>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <div className="title" style={{display: 'flex', alignItems: 'center'}}>
            <i class="fas fa-arrow-left fa-lg" style={{marginRight: '15px'}}></i>
            <h1>{this.props.locale}</h1>
          </div>
        </Link>
      </Frame>
    )
  }
}

export default Restaurants;