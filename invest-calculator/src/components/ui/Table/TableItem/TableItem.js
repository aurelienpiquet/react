import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableItem.module.scss';

const TableItem = ({ item }) => {
  console.log('item', item);
  return (
    <tr className={styles.TableItem}>
      <td>{item.year}</td>
      <td>{item.savingsEndOfYear}</td>
      <td>{item.totalSaving}</td>
      <td>{item.yearlyInterest}</td>
      <td>{item.yearlyContribution}</td>
    </tr>
  );
}

TableItem.propTypes = {};

TableItem.defaultProps = {};

export default TableItem;
