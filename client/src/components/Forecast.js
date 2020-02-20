import React from "react";
import moment from "moment";

import store from "store";

import imgConfig from "../config/weather_codes_icon_map.json";

import art_clear from "../images/art_clear.png";
import art_clouds from "../images/art_clouds.png";
import art_fog from "../images/art_fog.png";
import art_light_clouds from "../images/art_light_clouds.png";
import art_light_rain from "../images/art_light_rain.png";
import art_rain from "../images/art_rain.png";
import art_snow from "../images/art_snow.png";
import art_storm from "../images/art_storm.png";

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.moment = moment;
    let data = store.get("data");

    this.state = {
      data: this.parseData(data),
      name: data.city.name,
      lat: data.city.coord.lat,
      lon: data.city.coord.lon,
      timezone: data.city.timezone,
      sunrise: data.city.sunrise,
      sunset: data.city.sunset,
      country: data.city.country
    };
  }

  parseData(data) {
    let finalObj = {};

    data.list.forEach(games => {
      const date = games.date;
      if (finalObj[date]) {
        finalObj[date].push(games);
      } else {
        finalObj[date] = [games];
      }
    });
    return finalObj;
  }

  weatherFormatter(e) {
    // console.log(e.weather);

    return e.weather;
  }

  uvFormatter(e) {
    return e.uv;
  }

  applyIcon(icon) {
    let selectedIcon;
    switch (icon) {
      case "01d":
        selectedIcon = art_clear;
        break;
      case "01n":
        selectedIcon = art_clear;
        break;
      case "02d":
        selectedIcon = art_light_clouds;
        break;
      case "02n":
        selectedIcon = art_light_clouds;
        break;
      case "03d":
        selectedIcon = art_clouds;
        break;
      case "03n":
        selectedIcon = art_clouds;
        break;
      case "04d":
        selectedIcon = art_clouds;
        break;
      case "04n":
        selectedIcon = art_clouds;
        break;
      case "09d":
        selectedIcon = art_rain;
        break;
      case "09n":
        selectedIcon = art_rain;
        break;
      case "10d":
        selectedIcon = art_light_rain;
        break;
      case "10n":
        selectedIcon = art_light_rain;
        break;
      case "11d":
        selectedIcon = art_storm;
        break;
      case "11n":
        selectedIcon = art_storm;
        break;
      case "13d":
        selectedIcon = art_snow;
        break;
      case "13n":
        selectedIcon = art_snow;
        break;
      case "50d":
        selectedIcon = art_fog;
        break;
      case "50n":
        selectedIcon = art_fog;
        break;
      default:
        selectedIcon = art_clear;
    }
    return selectedIcon;
  }

  firstElementTemplate() {
    return (
      <div className="firstCard" key={this.state.name}>
        <li>
          <div className="cardContainer">
            <div className="today">
              {" "}
              <img width="70px" src={this.applyIcon(this.code)} /> Today
            </div>
            <div className="shortDate">
              {this.weekDay} {this.shortDate}
            </div>
            <span className="temperature">{Math.round(this.temperature)}</span>
            <span className="celsius">ºC</span>
          </div>
        </li>
        <li>
          <span className="cityName">
            {this.state.name}, {this.state.country}
          </span>
        </li>
      </div>
    );
  }

  forecastWeatherListTemplate() {
    return (
      <div key={this.weekDay} className="container-fluid forecastContainer">
        <div className="row listRow">
          <div className="col-3 weekDayList">{(this.weekDay).substring(0, 3)}</div>
          <div className="col-3 weatherList">
            {" "}
            <img width="32px" src={this.applyIcon(this.code)} />
          </div>
          <div className="col-3 tempList">
            {Math.round(this.temperature)}
            <span className="celsiusV2">ºC</span>
          </div>
          <div className="col-3 uvList"><span className="uvTitle">UV </span>{this.uv}</div>
        </div>
      </div>
    );
  }

  render() {
    let data = this.state.data;

    let values = Object.values(data).map(e => {
      return e || "error";
    });

    this.elements = values.map((e, index) => {
      let date = this.moment
        .unix(e[0].timestamp)
        .format()
        .split("T");
      let friendlyDate = this.moment
        .unix(e[0].timestamp)
        .format("LLLL")
        .split(",");
      let time = date[1];
      this.weekDay = friendlyDate[0];
      let day = friendlyDate[1];
      this.hour = `${friendlyDate[2].split(" ")[2]} ${
        friendlyDate[2].split(" ")[3]
      }`;
      this.shortDate = friendlyDate[1];
      this.weather = e[0].weather.toUpperCase();
      this.temperature = e[0].main.temp;
      this.humidity = e[0].main.humidity;
      this.uv = e[0].uv;
      this.code = e[0].code;

      if (index == 0) {
        return this.firstElementTemplate();
      } else {
        return this.forecastWeatherListTemplate();
      }
    });

    return (
      <div>
        <div className="mainHead">
          <ul>{this.elements}</ul>
        </div>
      </div>
    );
  }
}
