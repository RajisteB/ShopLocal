import React, { Component } from 'react';
import Query from './components/query/Query.jsx';
import Locations from './components/main/Locations.jsx'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Query />
        <div className="App-Content">
          <div className="title">
            <h1>Popular Locations</h1>
          </div>
          <Locations />
        </div>
      </div>
    );
  }
}

export default App;
