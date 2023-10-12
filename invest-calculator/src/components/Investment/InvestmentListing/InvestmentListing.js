import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InvestmentListing.module.scss';
import Table from '../../ui/Table/Table';

const InvestmentListing = (props) => {
  const show = props.results.length > 0;

  if (show) {
    return (
      <Table className={styles.InvestmentListing} items={props.results} />
    );
  }

  return (
    <p className={styles.InvestmentListing}>No data available at the moment.</p>
  );
}


InvestmentListing.propTypes = {};

InvestmentListing.defaultProps = {};

export default InvestmentListing;
