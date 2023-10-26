import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={`${styles.Input} ${props.isValid !== false ? '' : styles.invalid }`}>
            <label htmlFor={ props.id }>{ props.label }</label>
            <input
                ref={ref}
                {...props.input}
            />
        </div>
    );
});

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
