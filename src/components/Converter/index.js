/* eslint-disable max-len */
// import React, { Component } from 'react';
import React from 'react';

import Header from '../Header/index';
import Currencies from '../Currencies/index';
import Amount from '../Amount/index';
import Toggler from '../Toggler/index';

import currenciesData from '../../data/currencies';

import './styles.scss';
class Converter extends React.Component {
  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
    search: '',
  };

  componentDidMount() {
    this.changeDocumentTitleEffect();

    // listener sur la touche échappe pour toggle la liste des devises
    document.addEventListener('keyup', this.onPressEscape);
  }

  // méthode pour la mise à jour de Converter (vie)
  componentDidUpdate() {
    this.changeDocumentTitleEffect();
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // destruction de l'écouteur sur la touche échappe quand le composant est démonté
    document.removeEventListener('keyup', this.onPressEscape);
  }

  // callback pour le listener sur la touche échappe
  onPressEscape = (event) => {
    if (event.key === 'Escape') {
      this.toggle();
    }
  }

  changeDocumentTitleEffect = () => {
    const { currency } = this.state;
    document.title = `Euro to ${currency}`;
  }

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  // fonction qui sera en charge de modifier le state pour currency
  setCurrency = (name) => {
    this.setState({ currency: name });
  }

  // fonction qui sera en charge de modifier le state pour search
  setSearch = (value) => {
    this.setState({ search: value });
  }

  // fonction qui sera en charge de modifier le state pour baseAmount
  setBaseAmount = (value) => {
    this.setState({ baseAmount: Number(value) });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;

    // on cherche la devise dans le tableau de données qui a le même nom que la devise dans notre state
    const foundCurrency = currenciesData.find(
      (currentCurrency) => currentCurrency.name === currency,
    );

    // const amountValue = parseFloat((foundCurrency.rate * baseAmount).toFixed(2), 10);
    const amountValue = Math.round(foundCurrency.rate * baseAmount * 100) / 100;

    return amountValue;
  }

  getCurrenciesBySearch = () => {
    const { search } = this.state;
    let filteredCurrencies = currenciesData;

    // on s'assure que la valeur de search ne contienne pas que des espaces avec trim()
    if (search.trim().length > 0) {
      filteredCurrencies = currenciesData.filter((currency) => {
        // pour éviter les problème de casse, on passe tout en minuscule
        const loweredCurrency = currency.name.toLowerCase();
        const loweredSearch = search.toLowerCase();

        return loweredCurrency.includes(loweredSearch);
      });
    }

    return filteredCurrencies;
  }

  render() {
    const {
      open,
      baseAmount,
      currency,
      search,
    } = this.state;

    return (
      <div className="converter">
        <Header
          baseAmount={baseAmount}
          changeBaseAmount={this.setBaseAmount}
        />
        <Toggler
          isOpen={open}
          toggle={this.toggle}
        />
        { open && (
          <Currencies
            currencies={this.getCurrenciesBySearch()}
            changeCurrency={this.setCurrency}
            search={search}
            changeSearch={this.setSearch}
          />
        )}
        <Amount
          value={this.makeConversion()}
          currency={currency}
        />
      </div>
    );
  }
}

export default Converter;
