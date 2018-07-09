# fc-falling-letters

## Description

React component that animates each provided letter as falling text.

`npm install fc-falling-letter`

## Example

![demo](example.gif)

```
const React = require("react");
const ReactDOM = require("react-dom");
const FallingLetters = require("fc-falling-letters");

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
        <FallingLetters show={this.state.show}>foobar</FallingLetters>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```