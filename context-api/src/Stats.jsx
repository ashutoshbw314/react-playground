import React from 'react';
import {CatContext} from './CatContext';

class Stats extends React.Component {
  render() {
    return (
      <div>
        <CatContext.Consumer>
          {({names}) => (
            <>
              <h2>Animal Stats</h2>
              <p>Number of cats: {names.length}</p>
            </>
          )}
        </CatContext.Consumer>
      </div>
    )
  }
}

export default Stats;

