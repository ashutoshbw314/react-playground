class Parent extends React.Component {
  state = {
    childData: ''
  }

  handleChildData = (childData) => {
    this.setState({childData})
  }

  render() {
    return (
      <div>
        <h2>Data from child: {this.state.childData}</h2>
        <Child childDataHandler={this.handleChildData} />
      </div>
    )
  }
}

class Child extends React.Component {
  handleChange = (event) => {
    this.props.childDataHandler(event.target.value);
  }

  render() {
    return (
      <div style={{border: '1px solid gray', padding: '10px'}}>
        Child Component
        <input type="text" onChange={this.handleChange} />
      </div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById("main"));
