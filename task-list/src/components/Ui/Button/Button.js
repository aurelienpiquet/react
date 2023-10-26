import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {

    return (
        <button className={ props.color ? `${styles.Button} ${styles[props.color]}` : styles.Button }
            onClick={ props.onClick }
            id={ props.id }
        >
            { props.children }
        </button>
    );
}

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
