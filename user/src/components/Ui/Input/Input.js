import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = (props) => {
    const [error, setError] = useState(false);

    const onChangeHandler = (event) => {
        if (event.target.type === 'number' && !Number(event.target.value)) {
            setError(true);
        }

        props.onChange(event);
    }

    return (
        <div className={styles.Input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                onChange={ onChangeHandler }
                className={ error ? styles.error : ''}
                value={props.value}
            />
        </div>
    );
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
