import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import ReactDom from 'react-dom';

const Backdrop = () => {
    return (
        <div className={styles.backdrop}></div>
    );
}

const ModalOverlay = (props) => {
    return <div className={`${styles.modal} ${props.className}`}>
        {props.children}
    </div>
};

const Modal = (props) => {
    const portalElement = document.getElementById('overlays');

    return  (
        <Fragment>
            { ReactDom.createPortal(<Backdrop />, portalElement)}
            { ReactDom.createPortal(<ModalOverlay >{ props.children }</ModalOverlay>, portalElement)}
        </Fragment>
    );
}

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
