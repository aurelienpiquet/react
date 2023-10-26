import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Project from "../Project/Project";
import Sidebar from "../Ui/Sidebar/Sidebar";

const Main = () => {
    return (
        <main className={styles.Main}>
            <Project />
        </main>
    );
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
