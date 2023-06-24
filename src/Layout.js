import React from "react";

function Layout(props) {
  return (
    <>
      <header
        style={{
          margin: "10px",
          border: "3px solid red",
          fontFamily: "serif",
        }}
      >
        항상 출력되는 Layout : 머리말입니다.
      </header>
      {props.children}
    </>
  );
}

export default Layout;
