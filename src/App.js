import React, { Component, Fragment } from "react";
import Header from "./components/Header";

import PizzaContainer from "./containers/PizzaContainer";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <PizzaContainer />
      </Fragment>
    );
  }
}

export default App;
