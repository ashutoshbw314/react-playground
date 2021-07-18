const magic = {
  /*
  | Holds callbacks for any component to any 
  | component communication.
  */
}

class SiblingA extends React.Component {
  state = {
    text: 'magic'
  }

  componentDidMount() {
    if (magic.sendTextToB) {
      magic.sendTextToB(this.state.text);
    }
  }

  handleChange = (e) => {
    const text = e.target.value;
    magic.sendTextToB(text);
    this.setState({text});
  }

  render() {
    return (
      <div style={{border: '2px dotted orange', padding: '5px', marginTop: '5px'}}>
        <h2>Sibling A</h2>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
      </div>
    )
  }
}

class SiblingB extends React.Component {
  state = {
    text: ''
  }

  componentDidMount() {
    magic.sendTextToB = this.sendTextToB;
  }

  sendTextToB = (text) => {
    this.setState({text}) 
  }

  render() {
    return (
      <div style={{border: '2px dotted orange', padding: '5px', marginTop: '5px'}}>
        <h2>Sibling B</h2>
        <p>{this.state.text}</p>        
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        {/* 
          If you put <SiblingB /> after <SiblingA />, then it will not get the
          initial data from <SiblingA />, because <SiblingB /> had not yet
          written to `magic.sendTextToB` the callback.

          TODO: How to implement this is kind of data flow effectively, which is not
          affected by the component mounting or execution of it's `constructor()` etc?
        */}
        <SiblingB />
        <SiblingA />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
