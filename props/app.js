class Parent extends React.Component {
  render() {
    return (
      <>
        <Child name="Tea"/>
        <Child name="Coffee" info={{foo: 'one', bar: 'two'}}/>
      </>
    )
  }
}

class Child extends React.Component {
  logInfo = () => {
    console.log(this.props.info);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <button onClick={this.logInfo}>Log info</button>
      </div>
    )
  }
}


ReactDOM.render(<Parent />, document.getElementById("main"));
