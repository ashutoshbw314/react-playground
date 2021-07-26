import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div>
        hello
        <Child />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        Name is {this.props.name}
      </div>
    )
  }

  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps = {
    name: 'Ashutosh'
  }
}

export default App;
