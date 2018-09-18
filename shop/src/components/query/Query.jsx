import React, { Component } from 'react'
import './Query.css';

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      screensize: window.innerWidth,
    }
  }

  handleShowMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log('[Query.jsx]: In handleShowMenu function...');
  }

  componentDidMount() {
    if (this.state.screensize > 700) this.handleShowMenu();
  }

  render() {
    let icon,
        query,
        showMenu,
        queryStyle,
        containerStyle = null;
    let { isOpen, screensize } = this.state;

    icon = screensize < 700 ? isOpen ? "X" : "Search..." : null;
    query = screensize < 700 ? isOpen ? "55%" : "10%" : '20%';
    showMenu = screensize < 700 ? isOpen ? "1" : "0" : '';

    containerStyle = {
      height: query,
      transition: 'height 1s ease-in-out',
    }
    queryStyle = {
      opacity: showMenu,
      transition: parseInt(containerStyle.height) > 10 ? 'opacity 3.5s ease-in-out' : 'opacity 0.5s ease-in-out',
    }

    return (
      <div className="query-container" style={containerStyle}>
        <div onClick={this.handleShowMenu}>
          <h1>{icon}</h1>
        </div>
        <div className="searchbox" style={queryStyle}>
          <div className="logo">
            <h1>Shop Local</h1>
          </div>
          <div className="search-container">
            <div className="input-category">
              <span>Find</span>
              <input type="text" className="find" placeholder="Ex: Chinese, Italian"/>
            </div>
            <div className="input-distance">
              <span>within</span>
              <select name="miles" className="miles" id="">
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
                <option value="15">15 miles</option>
                <option value="25">25 miles</option>
                <option value="50">50 miles</option>
              </select>
            </div>
            <div className="input-zipcode">
              <span>Zipcode</span>
              <input type="text" className="zip"/>
            </div>
            <input className="input-start-query" type="button" value="Search" style={{background:'#F20804'}}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Query;