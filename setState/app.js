// It contains to separate examples:
// 1. Crazy Input
// 2. FunctionInSetState which contains 
//   2.1 Counter

class CrazyInput extends React.Component {
  state = {
    title: 'Health',
    category: 'digestive system',
    crazy: ''
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleCategoryChange = (e) => {
    this.setState({category: e.target.value});
  }

  handleCrazyChange = (e) => {
    this.setState({crazy: e.target.value + '...damn! '});
  }

  logState = () => {
    console.log(this.state)
  }

  render() {
    return ( 
      <div>
        <p>Title: {this.state.title}</p>
        <p>Category: {this.state.category}</p>
        <div>
          <label>Title: </label>
          <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
        </div>
        <div>
          <label>Category: </label>
          <input type="text" value={this.state.category} onChange={this.handleCategoryChange}/>
        </div>
        <div>
          <label>Crazy input: </label>
          <input type="text" value={this.state.crazy} onChange={this.handleCrazyChange}/>
        </div>
        <button onClick={this.logState}>Log state</button>
      </div>
    )
  }
}

class FunctionInSetState extends React.Component {
  render() {
    return (
      <div>
        <Counter purpose="Playing with function argument in setState" /> 
      </div>
    )
  }
}

class Counter extends React.Component {
  state = {
    count: 10,
  }

  increment = () => {
    this.setState((prevState, props) => {
      console.log('previous state: ', prevState);
      console.log('props: ', props);
      return {count: prevState.count + 1}
    })
  } 

  decrement = () => {
    this.setState((prevState, props) => {
      console.log('previous state: ', prevState);
      console.log('props: ', props);
      return {count: prevState.count - 1}
    })
  } 

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}


ReactDOM.render(<FunctionInSetState />, document.getElementById("main"));
