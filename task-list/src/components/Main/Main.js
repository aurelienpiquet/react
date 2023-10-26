import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Project from "../Project/Project";
import Sidebar from "../Ui/Sidebar/Sidebar";
import {ProjectContextProvider} from "../../context/ProjectContext";

const Main = () => {
    return (
        <main className={styles.Main}>
            <ProjectContextProvider>
                <Project />
            </ProjectContextProvider>
        </main>
    );
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
