import React from 'react';
import {AnimalContext} from './AnimalContext';
import Cats from './Cats.jsx';

class Animals extends React.Component {
  render() {
    return (
      <div>
        <AnimalContext.Consumer>
          {animals => {
            console.log('animals is:', animals)
            return (
              <>
                <ul>
                  <li>Vegetarian: {animals.veg}</li>
                  <li>Non-Vegetarian: {animals.nonVeg}</li>
                </ul>
              </>
            )}
          }
        </AnimalContext.Consumer>
        <Cats />
      </div>
    )
  }
}

export default Animals;

