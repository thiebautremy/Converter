import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';
import './styles.scss';

const Currencies = ({
  currencies,
  changeCurrency,
  search,
  changeSearch,
}) => {
  const mappedCurrencies = currencies.map(
    (currency) => (
      <Currency
        key={currency.name}
        name={currency.name}
        changeCurrency={changeCurrency}
      />
    ),
  );

  const handleOnChange = (event) => {
    changeSearch(event.target.value);
  };

  return (
    <div className="currencies">
      <input
        type="text"
        className="currencies__search"
        placeholder="Rechercher une devise"
        value={search}
        onChange={handleOnChange}
      />
      <ul className="currencies__list">
        {mappedCurrencies}
      </ul>
    </div>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
  changeCurrency: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  changeSearch: PropTypes.func.isRequired,
};

export default Currencies;
