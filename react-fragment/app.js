class Test extends React.Component {
  render() {
    return ( 
      // if you need to pass `key` attribute use long format
      // for example: <React.Fragment key={someThingUnique}>...</React.Fragment>
      <>
        <div style={{border: '1px solid gray', padding: '10px'}}>
          Part one
        </div>
        <div style={{border: '1px solid gray', padding: '10px'}}>
          Part two
        </div>
      </>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById("main"));
