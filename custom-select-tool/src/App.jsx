import React from 'react';

const BTC = 'Bitcoin';
const CREDITCARD = 'Creditcard';

class Switch extends React.Component {
  state = {
    paymentMethod: BTC,
  }

  select = (choice) => {
    return () => {
      this.setState({paymentMethod: choice})
    }
  }

  renderChoice = (choice) => {
    const cssClasses = ['choice'];

    if (this.state.paymentMethod == choice) {
      cssClasses.push('active');
    }

    return (
      <div className={cssClasses.join(' ')} onClick={this.select(choice)}>
        {choice}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderChoice(CREDITCARD)}
        {this.renderChoice(BTC)}
        <p>Pay with: {this.state.paymentMethod}</p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom Select tool</h1>    
        <Switch />
      </div>
    )
  }
}
export default App;
