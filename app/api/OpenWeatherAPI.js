export class OpenWeatherAPI {
  constructor(apiKey, endpoint, unit = 'metric') {
    this.apiKey = apiKey;
    this.weatherEndpoint = endpoint;
    this.unit = unit;
  }

  getTemp(location) {
    const encodedLocation = window.encodeURIComponent(location);

    return fetch(`${this.weatherEndpoint}?q=${encodedLocation}&units=${this.unit}&APPID=${this.apiKey}`)
      .then(r => r.text())
      .then(JSON.parse);
  }
}


export const defaultConfig = Object.freeze({
  apiKey: 'e3e20e4a5199ad5988ca9dad0f2b888e',
  weatherEndpoint: 'http://api.openweathermap.org/data/2.5/weather',
  unit: 'metric',
});

export default new OpenWeatherAPI(
  defaultConfig.apiKey,
  defaultConfig.weatherEndpoint,
  defaultConfig.unit,
);
