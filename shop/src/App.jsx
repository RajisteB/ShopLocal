import React, { Component } from 'react';
import Query from './components/query/Query.jsx';
import Locations from './components/main/Locations.jsx';
import Restaurants from './components/main/Restaurants.jsx';
import { Route, Switch } from 'react-router-dom';

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

const locales = [
{
  name: 'Atlanta',
  image: Atl,
},
{
  name: 'Chicago',
  image: Chi,
},
{
  name: 'Dallas',
  image: Dal,
},
{
  name: 'Los Angeles',
  image: LosAngeles,
},
{
  name: 'Miami',
  image: Mia,
},
{
  name: 'New York',
  image: NewYork,
},
{
  name: 'San Francisco',
  image: SanFran,
},
{
  name: 'Seattle',
  image: Sea,
},
{
  name: 'Washington D.C.',
  image: WDC,
}];

class App extends Component {
  constructor() {
    super();
    this.state = {
      popularLocation: '',
    }
  }

  handlePopularLocation = (loc) => {
    this.setState({
      popularLocation: loc,
    })
  }

  render() {

    return (
      <div className="App">
          <Query />
          <div className="App-Content">
            <Switch>
              <Route 
                exact={true}
                path="/"
                render={() => (
                  <Locations 
                    locales={locales} 
                    handleLocation={this.handlePopularLocation}/
                  >
                )}
              />
              <Route 
                exact={true}
                path={`/${this.state.popularLocation}`}
                render={() => (
                  <Restaurants 
                    locale={this.state.popularLocation}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
