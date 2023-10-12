import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';
import TableItem from './TableItem/TableItem';

const Table = ({ items }) => {
  items = items.map((item) => (
    <TableItem item={item} />
  ));

  console.log(items.length)
  return (
    <div className={styles.Table}>
      <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            { items }
          </tbody>
        </table>
    </div>
  );
}

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
