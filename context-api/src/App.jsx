import React from 'react';
import {AnimalContext} from './AnimalContext';
import {CatContext} from './CatContext';
import Animals from './Animals';
import Stats from './Stats';

class App extends React.Component {
  state = {
    animals: {
      veg: 'cow',
      nonVeg: 'lion'
    },
    cats: {
      names: ['Kitty', 'Jack', 'Nala'],
    }
  }

  setCatNames = (name) => {
    this.setState({cats: {
      names: this.state.cats.names.concat(name) 
    }});
  }

  render() {
    return (
      <div>
        <AnimalContext.Provider value={this.state.animals}>
          <CatContext.Provider value={{names: this.state.cats.names, setNames: this.setCatNames}}>
            <div>
              <h1>Hello Animals!</h1>
              <Animals />
            </div>
            <Stats />
          </CatContext.Provider>
        </AnimalContext.Provider>
      </div>
    )
  }
}

export default App;
