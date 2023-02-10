import React from "react";

const Hello = () => {
  /*
   * Below code using jsx
   */

  // return <div>
  //     <h1>
  //     Hello bhai
  //      </h1>
  //      </div>

  /*
    Below code with out jsx
    */

  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello")
  );
};

export default Hello;
