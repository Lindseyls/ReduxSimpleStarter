import axios from 'axios';

const API_KEY = '2066e309e83557bb390953af3b41aab3';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// fetchWeather is our new action creator
// responsible for creating an action that contains
// a request to the backend api
export function fetchWeather(city) {
  // The final url below is our search query that takes in the city
  // It is going to statically always search us cities
  const url = `${ROOT_URL}&q=${city},us`;
  // The below axios.get acts just like an ajax request in jQuery
  // It takes in the url and returns a promise
  const request = axios.get(url);

  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    // The promise returned from the axios.get is set to the payload
    payload: request
  };
}
