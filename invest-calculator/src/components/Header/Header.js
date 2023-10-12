import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import logo from '../../assets/investment-calculator-logo.png'


const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
