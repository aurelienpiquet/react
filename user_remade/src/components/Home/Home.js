import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import User from "../User/User";

const Home = () => (
  <div className={styles.Home}>
    <User />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
