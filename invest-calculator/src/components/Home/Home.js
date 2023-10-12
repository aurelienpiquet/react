import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import Header from '../Header/Header';
import Investment from '../Investment/Investment';

const Home = () => (
  <div className={styles.Home}>
    <Header />
    <Investment />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
