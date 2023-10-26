import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectDeleteComfirmation.module.scss';
import Button from "../../Ui/Button/Button";
import ButtonGroup from "../../Ui/ButtonGroup/ButtonGroup";
import Modal from "../../Ui/Modal/Modal";

const ProjectDeleteComfirmation = (props) => {
    return (
        <Modal className={styles.ProjectDeleteComfirmation}>
            <h2>Task list isn't empty, sure you wanna delete project?</h2>
            <ButtonGroup class='end'>
                <Button
                    color='white'
                    onClick={ props.onCanceled }
                >Cancel</Button>
                <Button
                    color='dark'
                    onClick={ props.onDelete }
                >
                    Delete
                </Button>
            </ButtonGroup>

        </Modal>
    );
}

ProjectDeleteComfirmation.propTypes = {};

ProjectDeleteComfirmation.defaultProps = {};

export default ProjectDeleteComfirmation;
