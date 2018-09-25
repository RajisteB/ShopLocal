import React, { Component } from 'react';
import Query from './components/query/Query.jsx';
import Locations from './components/main/Locations.jsx';
import SingleVenue from './components/main/SingleVenue.jsx';
import Restaurants from './components/main/Restaurants.jsx';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import axios from 'axios';

import './App.css';
import Atl from './images/atlanta.jpg';
import Chi from './images/chicago.jpg';
import Dal from './images/dallas.jpg';
import LosAngeles from './images/Losangeles.jpeg';
import Mia from './images/miami.jpeg';
import NewYork from './images/newyork.jpeg';
import SanFran from './images/sanfran.jpg';
import Sea from './images/seattle.jpeg';
import WDC from './images/wdc.jpeg';

const SHOP_KEY = process.env.REACT_APP_SHOP_LOCAL_KEY;


const locales = [
{
  name: 'Atlanta',
  image: Atl,
  zipcode: 30301,
},
{
  name: 'Chicago',
  image: Chi,
  zipcode: 60007,
},
{
  name: 'Dallas',
  image: Dal,
  zipcode: 75001,
},
{
  name: 'Los Angeles',
  image: LosAngeles,
  zipcode: 90001,
},
{
  name: 'Miami',
  image: Mia,
  zipcode: 33101,
},
{
  name: 'New York',
  image: NewYork,
  zipcode: 10001,
},
{
  name: 'San Francisco',
  image: SanFran,
  zipcode: 94016,
},
{
  name: 'Seattle',
  image: Sea,
  zipcode: 98101,
},
{
  name: 'Washington D.C.',
  image: WDC,
  zipcode: 20001,
}];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      singleVenue: {},
      dataLoaded: false,
      venueLoaded: false,
      popularLocation: '',
    }
  }

  getVenueData = (location) => {
    axios({
      method: 'get',
      url: 'https://api2.shop.com/shoplocal/v1/venues',
      responseType: 'json',
      params: {
        api_key: SHOP_KEY,
        distance: 25,
        queryLocation: location,
      }
    })
    .then(res => {
      this.setState({
        venues: res.data.response.venues,
        dataLoaded: true,
      })
    })
    .catch(err => console.log(err));
  }

  handlePopularLocation = (loc) => {
    this.setState({
      popularLocation: loc,
    })
  }

  getSingleVenue = (venue) => {
    this.setState({ 
      singleVenue: venue,
      venueLoaded: true,
    });
  }

  resetState = () => {
    this.setState({
      venues: [],
      singleVenue: {},
      dataLoaded: false,
      popularLocation: '',
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Query />
          <div className="App-Content">
            <Route render={({ location }) => {
              return (
              <TransitionGroup>
                <CSSTransition
                  classNames="fade"
                  timeout={600}
                  key={location.key}
                > 
                  <Switch location={location}>
                    <Route 
                      exact path="/"
                      render={() => (
                        <Locations 
                          locales={locales} 
                          handleVenue={this.getVenueData}
                          getLocation={this.handlePopularLocation}
                        />
                      )}
                    />
                    <Route 
                      path={`/${this.state.popularLocation}`}
                      render={() => (
                        <Restaurants 
                          locale={this.state.popularLocation}
                          venues={this.state.venues}
                          dataLoaded={this.state.dataLoaded}
                          reset={this.resetState}
                          getVenue={this.getSingleVenue}
                        />
                      )}
                    />
                    <Route 
                      path={`/${this.state.singleVenue.yelpId}`}
                      render={() => (
                        <SingleVenue 
                          singleVenue={this.state.singleVenue}
                          venueLoaded={this.state.venueLoaded}
                          locale={this.state.popularLocation}
                        />
                      )}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              )}}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
