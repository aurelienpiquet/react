import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Button from "../Button/Button";
import Card from "../Card/Card";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={ props.onClose }></div>
}

const ModalOverlay = (props) => {
    return (
        <Card className={styles.Modal}>
            <header>
                <h2>{props.error.title}</h2>
            </header>

            <div className={styles.content}>{props.error.message}</div>
            <Button onClick={ props.onClose } text={props.error.text} side='right'/>
        </Card>
    )
}

const Modal = (props) => {
    return (
        <React.Fragment>
            { ReactDom.createPortal(<Backdrop onClose={ props.onClose }/>, document.getElementById('backdrop-root')) }
            { ReactDom.createPortal(<ModalOverlay error={props.error} onClose={ props.onClose } />, document.getElementById('overlay-root')) }
        </React.Fragment>
    );
}

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
