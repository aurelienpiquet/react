import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableItem.module.scss';

const TableItem = ({ item }) => {
  console.log('item', item);
  return (
    <tr className={styles.TableItem}>
      <td>{item.year}</td>
      <td>{item.savingsEndOfYear.toFixed(2)}</td>
      <td>{item.totalSaving.toFixed(2)}</td>
      <td>{item.yearlyInterest.toFixed(2)}</td>
      <td>{item.yearlyContribution.toFixed(2)}</td>
    </tr>
  );
}

TableItem.propTypes = {};

TableItem.defaultProps = {};

export default TableItem;
