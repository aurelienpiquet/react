import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = (props) => {
  const [error, setError] = useState(false);

  const onChangeHandler = (event) => {
      if (event.target.id) {
          setError(event.target.value === '');
          props.onChange(event);
      } else {
          setError(false);
      }
  }

  return (
    <div className={styles.Input}>
      <label htmlFor={ props.id }>
        { props.label } ({props.labelAnnotation})
      </label>
      <input 
        type={ props.type }
        id={ props.id }
        key={ props.id }
        onChange={ onChangeHandler }
        className={(props.arrow ? '' : styles.arrows) + ' ' + (error ? styles.error : '')}
        value={ props.value }
      /> 
    </div>
  );
}

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
