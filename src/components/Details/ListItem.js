/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import covid from '../../assets/covid.png';

const ListItem = ({ countries, TotalConfirmed }) => {
  const passData = countries;
  return (
    <div className="country">
      <div className="summary">
        <NavLink id={countries} to="/Details" state={{ country: passData }}>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-right" />
          <img src={covid} className="covid-icn" alt="COVID-19" />
          <p className="country-name">{countries}</p>
          <p className="total-confirmed">{(TotalConfirmed).toLocaleString('en-US')}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ListItem;
