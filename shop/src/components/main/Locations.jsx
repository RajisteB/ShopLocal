import React, { Component } from 'react'
import './Locations.css';
import Atl from '../../images/atlanta.jpg';
import Chi from '../../images/chicago.jpg';
import Dal from '../../images/dallas.jpg';
import LosAngeles from '../../images/Losangeles.jpeg';
import Mia from '../../images/miami.jpeg';
import NewYork from '../../images/newyork.jpeg';
import SanFran from '../../images/sanfran.jpg';
import Sea from '../../images/seattle.jpeg';

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
  }];


class Locations extends Component {
  render() {
    return (
      <div className="locations-container">
        {
          locales.map((loc, idx) => {
            let style = {
              background: "linear-gradient( rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.8) ), url(" + loc.image + ")",
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23)',
            };

            return (
              <div className="locale-container" style={style} key={idx}>
                <h2>{loc.name}</h2>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Locations;