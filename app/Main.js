import React from "react";
import ReactDOM from "react-dom";

function ExampleComponent() {
  return (
    <div>
      <h1>The sky is blue</h1>
      <p>This is our app!!!!</p>
    </div>
  );
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"));
if (module.hot) {
  module.hot.accept();
}
