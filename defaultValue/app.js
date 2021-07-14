class Test extends React.Component {
  state = {
    title: 'Health',
    inputShown: true,
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  toggleInput = () => {
    this.setState({inputShown: !this.state.inputShown})
  }

  render() {
    return ( 
      <div>
        <p>Title: {this.state.title}</p>
        {
          this.state.inputShown ?
            <div>
              <label>Title: </label>
              <input type="text" defaultValue={'something'} onChange={this.handleTitleChange}/>
            </div>
          : <></>
        }
        <button onClick={this.toggleInput}>Toggle showing input</button>
      </div>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById("main"));
