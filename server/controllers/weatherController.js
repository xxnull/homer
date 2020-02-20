import axios from "axios";
import config from "../config/api.json";

export default class weatherController {
  constructor() {}

  weatherForecastHandler(params) {
    this.list = [];
    return this.getForecast(params.zipcode, params.country)
      .then(e => {
        this.list.push({
          city: e.forecast.city,
          country: e.forecast.country,
          list: this.parseList(e.forecast.list, e.uvindex)
        });
      })
      .then(e => {
        return this.list;
      });
  }

  parseList(rawList, uvindex, country) {
    this.setUV(uvindex);
    return rawList.map(e => {

      console.log(e);
      
      try {
        let uv = this.getUV(e.dt_txt.split(" ")[0]);
        return {
          date: e.dt_txt.split(" ")[0],
          time: e.dt_txt.split(" ")[1],
          timestamp: e.dt,
          weather: e.weather[0].main,
          main: e.main,
          code: e.weather[0].icon,
          uv: uv
        };
      } catch (error) {
        console.error(error);
      }
    });
  }

  getUV(date) {
    let uvFiltered = this.uv.filter(e => {
      if (date == e.date_iso.split("T")[0]) {
        return e.value;
      }
    });

    if (!!uvFiltered[0]) {
      return uvFiltered[0].value;
    }
  }

  setUV(uvindex) {
    this.uv = uvindex;
  }

  async getForecast(zipcode, country) {
    try {
      let weatherUrl = "http://api.openweathermap.org/data/2.5/forecast";
      let uvUrl = "http://api.openweathermap.org/data/2.5/uvi/forecast";
      let appId = "e2cf92ad32fb29b4a749ccfccb64c9f3";

      let forecast = await axios.get(
        `${weatherUrl}?zip=${zipcode},${country}&APPID=${appId}&units=metric`
      );

      let uVIndex = await axios.get(
        `${uvUrl}?appid=${appId}&lat=${forecast.data.city.coord.lat}&lon=${forecast.data.city.coord.lon}&cnt=5`
      );

      return {
        forecast: forecast.data,
        uvindex: uVIndex.data
      };
    } catch (error) {
      console.error(error);
    }
  }
}
