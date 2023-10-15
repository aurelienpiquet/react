import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {

    return (
        <div className={styles.Button} style={{ textAlign : props.side }}>
            <button
                    type={props.type || 'button'}
                    onClick={ props.onClick }
            >
                { props.text }
            </button>
        </div>
    );
}

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
