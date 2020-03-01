import Axios from 'axios';

const API_ENDPOINT = 'https://api.entur.io/geocoder/v1';

export const autocomplete = (text, size = 20, lang = 'no') => {
  return Axios.get('autocomplete', {
    baseURL: API_ENDPOINT,
    headers: {
      'ET-Client-Name': process.env.VUE_APP_CLIENT_NAME,
    },
    params: {
      text,
      size,
      lang
    },

  });
};

export const reverse = (lat, lon, radius, size = 10, layers = 'venue') => {
  return Axios.get('reverse', {
    baseURL: API_ENDPOINT,
    headers: {
      'ET-Client-Name': process.env.VUE_APP_CLIENT_NAME,
    },
    params: {
      'point.lat': lat,
      'point.lon': lon,
      'boundary.circle.radius': radius,
      size,
      layers
    }
  });
};