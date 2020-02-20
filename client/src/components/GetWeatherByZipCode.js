import React from "react";
import countryData from "../config/country_data";
import axios from "axios";
import store from "store";
import countryList from "react-select-country-list";
import Select from "react-select";

export default class GetWeatherByZipCode extends React.Component {
 

  constructor(props) {
    super(props);

    this.myInput = React.createRef();
    this.country = React.createRef();

    this.state = {
      selectedOption: null,
      options: countryList().getData(),
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  getWeatherForecast = event => {
    event.preventDefault();
    const zipcode = this.myInput.current.value;

    if (!!this.state.selectedOption) {
      const country = this.state.selectedOption.value.toLowerCase();

      this.fetchData(zipcode, country).then(e => {});
    } else {
      console.error("You have to select a country");
      this.setState({ error: "You have to select a country" });
    }
  };

  fetchData = async (zip, country) => {
    await axios
      .get(`http://localhost:3001/weather/${country}/${zip}`, { timeout: 1000 })
      .then(response => {


        this.setState({ data : response.data[0]});
        store.set('data', response.data[0])
        this.props.history.push(`/forecast`)

      })
      .catch(err => {
        console.log(err.code);
        console.log(err.message);
        console.log(err.stack);
      });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="container-fluid mainContainer">
        <div className="row">
          <form className="getWeatherForm" onSubmit={this.getWeatherForecast}>
            <h2>Get global weather forecast for the next 5 days</h2>

            <div className="form-group">
              <label className="small">Pick a country</label>

              <Select
                options={this.state.options}
                value={selectedOption}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label className="small">Six digits only</label>
              <input
                pattern="[0-9]{5,6}"
                className="form-control"
                type="text"
                ref={this.myInput}
                required
                placeholder="Enter a zip code"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Get Forecast
            </button>
          </form>
        </div>
      </div>
    );
  }
}
