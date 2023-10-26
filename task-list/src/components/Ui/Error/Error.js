import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.scss';
import Modal from "../Modal/Modal";

const Error = (props) => {

    return (
        <Modal className={styles.Error}>
            { props.children }
        </Modal>
    );

}
Error.propTypes = {};

Error.defaultProps = {};

export default Error;
