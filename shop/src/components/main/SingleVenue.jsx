import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './SingleVenue.css';


const Frame = (props) => {
  return (
    <div>{props.children}</div>
  );
}

class SingleVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    }
  }

  render() {
    console.log(this.props);
    const MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;
    let { singleVenue } = this.props;
    let rating = null;
    let ratingArr = null;
    let mapOptions = null;
    console.log(singleVenue);

    mapOptions = {
      center : {
        lat: singleVenue.latitude,
        lng: singleVenue.longitude,
      },
      zoom: 12,
    }
    rating = singleVenue.rating.toString();
    if (rating.indexOf('.') !== -1 ) {
      ratingArr = new Array(Math.floor( (singleVenue.rating) + 1 ));
      ratingArr.fill('star');
      ratingArr[ratingArr.length - 1] = 'half-star';
    } else {
      ratingArr = new Array(singleVenue.rating);
      ratingArr.fill('star');
    }

    return (
      <Frame>
        <Link to={`/${this.props.locale}`} style={{textDecoration: 'none'}}>
          <div className="title" style={{display: 'flex', alignItems: 'center'}}>
            <i className="fas fa-arrow-left fa-lg" style={{marginRight: '15px'}}></i>
            <h1>{this.props.singleVenue.offers[0].rewardValue}% Cashback</h1>
          </div>
        </Link>
          <div className="venue-container">
              <div className="columns column-info">
                <div className="slideshow">
                  <img src={singleVenue.medias[0].largeUrl} />

                </div>
                <div className="dots">
                  <i className="fas fa-circle"></i>
                  <i className="fas fa-circle"></i>
                  <i className="fas fa-circle"></i>
                  <i className="fas fa-circle"></i>
                </div>  
                <div className="venue-name">{singleVenue.name}</div>
                <div className="ratings-reviews">
                  <div className="rating">
                    {
                      ratingArr.map((x, i) => {
                        if (x === 'star' ) 
                          return <i className="fas fa-star" key={i}></i> 
                        else
                          return <i className="fas fa-star-half-alt" key={i}></i>;
                      })
                    }
                  </div>
                  <div className="review">
                    <h3>{singleVenue.ratingCount} Reviews</h3>
                  </div>
                </div>
                <div className="categories">
                <h3 style={{ fontStyle: 'italic' }}>
                  { singleVenue.categories.join(', ') }
                </h3>
                </div>
                <div className="address">
                  <h3>{singleVenue.address.streetAddress}</h3>
                </div>
                <div className="city">
                  <h3>{singleVenue.address.metroName}, {singleVenue.address.state.toUpperCase()}</h3> 
                </div>
                <div className="landline">
                  <h3>{singleVenue.phone}</h3>
                </div>
                <div className="hours-price">
                  <div className="hours-container">
                    <i className="far fa-clock fa-2x"></i>
                    <div className="hours-content">
                      <div className="detail-title">Today</div>
                      <div>{singleVenue.simpleHours['MONDAY']}</div>
                    </div>
                  </div>
                  <div className="price-container">
                    <i className="fas fa-dollar-sign fa-2x"></i>
                    <div className="price-content">
                      <div className="detail-title">Price</div>
                      <div>{singleVenue.priceRange}</div>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <i className="far fa-credit-card fa-2x"></i>
                  <div className="cards-container">
                    <div className="detail-title">Accepted</div>
                    <div>{singleVenue.acceptedCards.join(', ')}</div>
                  </div>
                </div>
                <div className="description">
                  <i className="fas fa-info-circle fa-2x"></i>
                  <div className="description-content">
                    <div className="detail-title">Info</div>
                    <div>{singleVenue.description ? singleVenue.description.split('.')[0] + "." : ''}</div>
                  </div>
                </div>
              </div>
              {/* <div className="columns"></div> */}
              <div className="columns">
                <iframe 
                  width={'100%'}
                  height={'100%'}
                  src={`https://www.google.com/maps/embed/v1/place?q=${singleVenue.latitude},${singleVenue.longitude}&key=${"AIzaSyC-xAZYd7hi1emc9RxMIZb_ebAkfB_5IQA"}&zoom=16`} 
                  frameBorder={"0"}
                  style={{ border: '0'}}
                >
                </iframe>
              </div>
          </div>
      </Frame>
    )
  }
}

export default SingleVenue;