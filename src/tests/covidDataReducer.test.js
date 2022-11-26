import covidDataReducer from '../redux/covid-19/reducer';

const mockData = [{
  Country: 'Afghanistan',
  CountryCode: 'AF',
  Cases: '201503',
  Date: '2022-10-18T00:00:00Z',
  Lat: '33.94',
  Lon: '67.71',
  Status: 'confirmed',
}, {
  Country: 'Albania',
  CountryCode: 'AL',
  Cases: '332673',
  Date: '2022-10-18T00:00:00Z',
  Lat: '41.15',
  Lon: '20.17',
  Status: 'confirmed',
},
];
const toget = {
  0:
{
  Country: 'Afghanistan',
  CountryCode: 'AF',
  Cases: '201503',
  Date: '2022-10-18T00:00:00Z',
  Lat: '33.94',
  Lon: '67.71',
  Status: 'confirmed',

},
  1:
  {
    Country: 'Albania',
    CountryCode: 'AL',
    Cases: '332673',
    Date: '2022-10-18T00:00:00Z',
    Lat: '41.15',
    Lon: '20.17',
    Status: 'confirmed',

  },
  back: false,
  countries: [
    {
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Cases: '201503',
      Date: '2022-10-18T00:00:00Z',
      Lat: '33.94',
      Lon: '67.71',
      Status: 'confirmed',

    },
    {
      Country: 'Albania',
      CountryCode: 'AL',
      Cases: '332673',
      Date: '2022-10-18T00:00:00Z',
      Lat: '41.15',
      Lon: '20.17',
      Status: 'confirmed',
    }],
  loading: false,
};
describe('Testing For an Empty on Initial ', () => {
  test('init State', () => {
    expect(covidDataReducer([], [])).toEqual([]);
  });
});

describe('Testing For reducer on Mock Data', () => {
  test('Reducer tesing for Mock Data', () => {
    const FETCHDATA = 'covid-19-data-app/action/FETCHDATA';
    const action = {
      type: FETCHDATA,
      payload: mockData,
    };
    expect(covidDataReducer(mockData, action)).toEqual(toget);
  });
});
