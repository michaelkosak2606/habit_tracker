import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { css } from "emotion";
import styled from "react-emotion";

import { useLocalStorage } from "./middleware";
import reducer from "./reducer";
import initialState from "./initialState";

import CurrentDayView from "./containers/CurrentDayView";
import StatisticsView from "./containers/StatisticsView";
import ChartsView from "./containers/ChartsView";

const getInitialState = () => {
  const savedState = localStorage.getItem("state");
  if (savedState) {
    return JSON.parse(savedState);
  } else {
    return initialState;
  }
};
const store = createStore(
  reducer,
  getInitialState(),
  applyMiddleware(useLocalStorage),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <React.Fragment>
            <Route exact path="/" component={CurrentDayView} />
            <Route path="/statistics" component={StatisticsView} />
            <Route path="/charts" component={ChartsView} />
          </React.Fragment>
        </Provider>
      </Router>
    );
  }
}

export default App;
