import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.scss';

const Sidebar = (props) => {

    return (
        <aside className={ `${styles.Sidebar} ${props.className}`}>
            { props.children }
        </aside>
    );
}

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
