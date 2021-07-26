// html tag

class Foo extends React.Component {
  render() {
    const introProps = {
      name: "ashutosh",
      age: 28,
    }
    return (
      <div foo='oo'>
        <p>
          {'\uD83D\uDE0B'}
        </p>
      </div>
    )
  }
}


ReactDOM.render(<Foo />, document.getElementById("main"));
