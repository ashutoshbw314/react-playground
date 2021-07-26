import React from 'react';
import {CatContext} from './CatContext';

class Cats extends React.Component {
  state = {
    catName: ''
  }

  setCatName = (event) => {
    this.setState({catName: event.target.value})
  }

  render() {
    return (
      <CatContext.Consumer>
        {({names, setNames}) => (
          <>
            <h2>Cats</h2>
            <ul>
              {names.map((cat, i) => (
                <li key={i}>{cat}</li>
              ))}
            </ul>
            <input type="text" value={this.state.catName} onChange={this.setCatName}/>
            <button onClick={() => setNames(this.state.catName)}>Add new cat</button>
          </>
        )}
      </CatContext.Consumer>
    )
  }
}

export default Cats;


