class Test extends React.Component {
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

ReactDOM.render(<Test />, document.getElementById("main"));
