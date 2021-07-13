class Test extends React.Component {
  state = {
    title: 'Health',
    category: 'digestive system',
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleCategoryChange = (e) => {
    this.setState({category: e.target.value});
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
        <button onClick={this.logState}>Log state</button>
      </div>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById("main"));
