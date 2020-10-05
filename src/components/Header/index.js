import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ baseAmount, changeBaseAmount }) => {
  const handleOnChange = (event) => {
    changeBaseAmount(event.target.value);
  };

  return (
    <header className="header">
      <h1 className="header__title">Convertisseur</h1>
      <p className="header__base-amount">
        <input
          type="number"
          className="header__input"
          value={baseAmount}
          onChange={handleOnChange}
        /> €
      </p>
    </header>
  );
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  changeBaseAmount: PropTypes.func.isRequired,
};

export default Header;
