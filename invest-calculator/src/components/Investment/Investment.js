import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Investment.module.scss';
import InvestmentForm from './InvestmentForm/InvestmentForm';
import InvestmentListing from './InvestmentListing/InvestmentListing';
import { calcul } from '../../services/InvestmentCalculService';

const Investment = () => {
  const [results, setResults] = useState('');

  const onSubmitHandler = (investment) => {
      setResults(calcul(investment));
  }

  const onResetHandler = () =>  {
    setResults('');
  }

  return (
    <div className={styles.Investment}>
      <InvestmentForm onSubmit={ onSubmitHandler } onReset={ onResetHandler }/>
      <InvestmentListing results={ results } />
    </div>
  );
}

Investment.propTypes = {};

Investment.defaultProps = {};

export default Investment;
