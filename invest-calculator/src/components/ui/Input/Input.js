import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = (props) => {
  const [error, setError] = useState(false);

  const onChangeHandler = (event) => {
    setError(!Number(event.target.value));
    props.onChange(event);
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
        className={ (!props.arrow ? 'arrow' : '') + ' ' + (error ? 'error' : '')}
        value={ props.value }
      /> 
    </div>
  );
}

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
