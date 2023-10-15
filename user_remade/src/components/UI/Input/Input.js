import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = (props) => {
    const onChangeHandler = (event) => {
        props.onChange(event);
    }

    return (
        <div className={styles.Input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={ props.id }
                value={ props.value }
                type={ props.type || 'text'}
                onChange={ onChangeHandler }
            />
        </div>
    );

}
Input.propTypes = {};

Input.defaultProps = {};

export default Input;
