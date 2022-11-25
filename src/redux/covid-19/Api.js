import { fetchdata, fetchdataerror, fetchcountrydata } from './actions';
import axios from 'axios';

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
  // const today = new Date();
  // const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  API1.get(`${countryName}/status/confirmed`).then((res) => {
    const incomming = res.data[1000];
    // const data = Object.values(incomming)[0].countries;
    dispatch(fetchcountrydata(incomming));
  }).catch(() => {
    dispatch(fetchdataerror());
  });
};

export default getDataAPI;

// https://api.covid19api.com/summary