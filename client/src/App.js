import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import countryList from "react-select-country-list";
import GetWeatherByZipCode from "./components/GetWeatherByZipCode";
import Forecast from "./components/Forecast";
import NotFound from "./components/NotFound";

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  state = {
    options: countryList().getData(),
    data: [],
    error: null
  };

  addState = state => {
    // const data = {...this.state.data}
    // data[`newstate`] = state
    // this.setState({
    //   state: data
    // })
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <GetWeatherByZipCode {...props} state={this.state.options} />
            )}
          />
          <Route
          exact
            path="/forecast/"
            render={props => <Forecast {...props} state={this.state} />}
          />
          <Route  component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
