import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../../images/Loading.gif';
import './Restaurants.css';

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
    console.log(this.props);
    let content = null;
    let media = null;
    let locationVenues = this.props.venues.slice();
    locationVenues.pop();
    
    if (this.props.dataLoaded) {
      content = locationVenues.map((venue, idx) => {
        if (venue.medias[0]) 
          media = venue.medias[0].mediumUrl 
        else  
          media = venue.thumbnailUrl;

        return (
          <Link 
            key={idx} 
            style={{textDecoration: 'none'}}
            className="venue" 
            to={`/${venue.yelpId}`} 
          >
            <div 
              onClick={() => this.props.getVenue(venue)}
              className="venue-card"
            >
              <img src={media}/>
              <div className="venue-title">{venue.name}</div>
            </div>
          </Link>
        )
      })
    } else {
      content = <img src={Loading} />
    }
    
    
    return (
      <Frame >
        <Link to={'/'} style={{textDecoration: 'none'}} >
          <div 
            className="title" 
            onClick={this.props.reset}
            style={{display: 'flex', alignItems: 'center'}}
          >
            <i className="fas fa-arrow-left fa-lg" style={{marginRight: '15px'}}></i>
            <h1>{this.props.locale}</h1>
          </div>
        </Link>
        <div className="restaurant-container">
          {content}
        </div>
      </Frame>
    )
  }
}

export default Restaurants;