import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ baseAmount, changeBaseAmount }) => {
  const handleOnChange = (event) => {
    changeBaseAmount(event.target.value);
  };

  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__base-amount">
        <input
          type="number"
          className="header__input"
          value={baseAmount}
          onChange={handleOnChange}
        /> euro
      </p>
    </header>
  );
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  changeBaseAmount: PropTypes.func.isRequired,
};

export default Header;
