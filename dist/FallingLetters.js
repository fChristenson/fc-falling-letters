const React = require("react");

const initialStyles = {
  display: "inline-block",
  transform: "translateY(-50px)",
  opacity: 0
};

const EndStyles = delay => {
  return {
    transform: "translateY(0px)",
    opacity: 1,
    transition: `all 0.5s ${delay}s ease-in`
  };
};

const wrapLettersInSpan = show => (letter, index) => {
  let style = null;
  if (show) {
    style = Object.assign({}, initialStyles, EndStyles(index * 0.1));
  } else {
    style = initialStyles;
  }

  return letter === " " ? letter : React.createElement(
    "span",
    { key: index, style: style },
    letter
  );
};

const FallingLetters = ({ children, show }) => {
  return React.createElement(
    "span",
    null,
    children.split("").map(wrapLettersInSpan(show))
  );
};

module.exports = FallingLetters;