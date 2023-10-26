import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonGroup.module.scss';

const ButtonGroup = (props) => {
    return (
        <div className={`${styles.ButtonGroup} ${styles[props.class]}`}>
            { props.children }
        </div>
    );
}

ButtonGroup.propTypes = {};

ButtonGroup.defaultProps = {};

export default ButtonGroup;
