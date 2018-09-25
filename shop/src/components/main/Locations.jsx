import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Locations.css';

const Frame = (props) => {
  return (
    <div>{props.children}</div>
  );
}

class Locations extends Component {
  constructor(props) {
    super(props);
  }

  getVenueData = (zip, location) => {
    this.props.handleVenue(zip);
    this.props.getLocation(location);
  }
  render() {
    return (
      <Frame>
        <div className="title">
          <h1>Popular Locations</h1>
        </div>
        <div className="locations-container">
          {
            this.props.locales.map((loc, idx) => {
              let style = {
                background: "url(" + loc.image + ")",
                backgroundSize: 'cover',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23)',
              };

              return (
                <Link to={`/${loc.name}`} key={idx} style={{textDecoration: 'none'}}>
                  <div className="locale-container" 
                    style={style}  
                    onClick={() => this.getVenueData(loc.zipcode, loc.name)}
                  >
                    <div className="locale-overlay"></div>
                    <h2>{loc.name}</h2>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </Frame>
    )
  }
}

export default Locations;