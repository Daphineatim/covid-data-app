import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'randomized-string';
import { getCountryData } from '../../redux/covid-19/Api';
import { detailStart } from '../../redux/covid-19/actions';
import './Details.css';

// const axios = require('axios');

const Details = () => {
  // const [flag, setFlag] = useState();
  // let data = [];
  const location = useLocation();
  const { country } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailStart());
    if (country === 'United States of America') {
      dispatch(getCountryData('US'));
    }
    dispatch(getCountryData(country));
  }, [dispatch, country]);
  const { view, loading, error } = useSelector((state) => state.covidDataReducer);
  if (loading === true || Object.values(view)[0] === undefined) {
    return <div><img src="https://c.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" className="loading-animation" alt="loading..." /></div>;
  }
  if (error === true) {
    return <div className="error">Network Error, Try Refreshing page</div>;
  }

  return (
    <div className="detail-data-wrap">
        <div key={generate()} className="detail-data">
          <div className="covid-data">
            <span>Country :</span>
            <span key={generate()}>
              {view.Country}
            </span>
          </div>
          <div className="covid-data">
            <span>Country Code :</span>
            <span key={generate()}>
              {(view.CountryCode)}
            </span>
          </div>
          <div className="covid-data">
            <span>Cases :</span>
            <span key={generate()}>
              {(view.Cases)}
            </span>
          </div>
          <div className="covid-data">
            <span>Date :</span>
            <span key={generate()}>
              { (view.Date)}
            </span>
          </div>
          <div className="covid-data">
            <span>Lat:</span>
            <span key={generate()}>
              {(view.Lat)}
            </span>
          </div>
          <div className="covid-data">
            <span>Lon:</span>
            <span key={generate()}>
              {(view.Lon)}
            </span>
          </div>
          <div className="covid-data">
            <span>Status:</span>
            <span key={generate()}>
              {(view.Status)}
            </span>
          </div>
        </div>
      {/* ))} */}

    </div>
  );
};

export default Details;
