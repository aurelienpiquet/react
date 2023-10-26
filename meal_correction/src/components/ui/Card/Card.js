import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={ props.dark ? `${ styles.CardDark } ${props.className}` : `${ styles.CardLight } ${props.className}`}>
            { props.children }
        </div>
    );
}

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
