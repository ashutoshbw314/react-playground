import React from 'react';

const BTC = 'Bitcoin';
const CREDITCARD = 'Creditcard';

const Choice = ({active, onClick, label}) => {
  const cssClasses = ['choice'];

  if (active) {
    cssClasses.push('active');
  }

  return (
    <div className={cssClasses.join(' ')} onClick={onClick}>
      {label}
    </div>
  );
};

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
        {/*
          {this.renderChoice(CREDITCARD)}
          {this.renderChoice(BTC)}
        */}

        {/* Using stateless component instead of the `renderChoice` method */}
        <Choice
          onClick={this.select(CREDITCARD)}
          active={this.state.paymentMethod == CREDITCARD}
          label="Pay with Creditcard"
        />
        <Choice
          onClick={this.select(BTC)}
          active={this.state.paymentMethod == BTC}
          label="Pay with BTC"
        />

        <p>Paying with: {this.state.paymentMethod}</p>
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
