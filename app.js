const React = require("react");
const ReactDOM = require("react-dom");
const FallingLetters = require("./FallingLetters");

class App extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.show = this.show.bind(this);
  }

  show() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={this.show}>show</button>
        <FallingLetters show={this.state.show}>foobar barfoo</FallingLetters>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
