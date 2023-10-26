import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.Input} style={ props.input.width ? {
            'width' : props.input.width
        } : null}>
            { props.input.label && <label htmlFor={ props.input.id }>{ props.input.label}</label> }

            { props.input.type !== 'textarea' &&
                <input
                    ref={ref}
                    { ...props.input }
                />
            }

            { props.input.type === 'textarea' &&
                <textarea rows='5' cols='33' ref={ref}
                    { ...props.input }
                ></textarea>
            }

            { props.input.error &&
                <p className={styles.error}>Invalid field</p>
            }

        </div>
    );
});

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
