import axios from 'axios';
import { fetchdata, fetchdataerror, fetchcountrydata } from './actions';

const API = axios.create({ baseURL: 'https://api.covid19api.com/summary' });
const API1 = axios.create({ baseURL: 'https://api.covid19api.com/country' });

const getDataAPI = () => async (dispatch) => {
  await API.get().then((res) => {
    dispatch(fetchdata(res.data.Countries));
  }).catch(() => {
    dispatch(fetchdataerror());
  });
};
export const getCountryData = (countryName) => (dispatch) => {
  API1.get(`${countryName}/status/confirmed`).then((res) => {
    const incomming = res.data[1000];
    dispatch(fetchcountrydata(incomming));
  }).catch(() => {
    dispatch(fetchdataerror());
  });
};

export default getDataAPI;

// https://api.covid19api.com/summary
