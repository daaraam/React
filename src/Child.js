import React from "react";

// function Child(props) {
//   console.log(props);
//   return <div>Child</div>;
// }

function Child({ age, name, children }) {
  console.log(age);
  console.log(name);
  console.log(children);
  return <div>Child</div>;
}

Child.defaultProps = {
  children: "강아지",
};

export default Child;
