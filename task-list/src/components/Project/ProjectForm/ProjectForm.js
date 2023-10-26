import React, {useContext, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectForm.module.scss';
import Button from "../../Ui/Button/Button";
import Input from "../../Ui/Input/Input";
import ProjectContext from "../../../context/ProjectContext";
import ButtonGroup from "../../Ui/ButtonGroup/ButtonGroup";

const ProjectForm = (props) => {
    const inputTitle = useRef();
    const [inputTitleError, setInputTitleError] = useState(false);
    const inputDescription = useRef();
    const [inputDescriptionError, setInputDescriptionError] = useState(false);
    const inputDate = useRef();
    const [inputDateError, setInputDateError] = useState(false);

    const projectCtx = useContext(ProjectContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let formIsValid = true;

        const project = {
            title : inputTitle.current.value.trim(),
            description: inputDescription.current.value.trim(),
            date: inputDate.current.value.trim(),
            id: Math.random(),
            tasks: [],
        }

        if (project.title === '') {
            setInputTitleError(true);
            formIsValid = false;
        }

        if (project.description === '') {
            setInputDescriptionError(true);
            formIsValid = false;
        }

        if (project.date === '') {
            setInputDateError(true);
            formIsValid = false;
        }

        if (!formIsValid) {
            return;
        }

        props.onAddProject(project);
    }

    return (
        <form className={styles.ProjectForm}
            onSubmit={onSubmitHandler}
        >
            <ButtonGroup class='end'>
                <Button onClick={ props.onClose } color='white'>Cancel</Button>
                <Button type='submit' color='dark'>Save</Button>
            </ButtonGroup>
            <section>
                <Input input={
                    {
                        ref : inputTitle,
                        label: 'TITLE',
                        id: 'title',
                        type: 'text',
                        error: inputTitleError,
                    }
                }/>
                <Input input={
                    {
                        ref : inputDescription,
                        label: 'DESCRIPTION',
                        id: 'description',
                        type: 'text',
                        error: inputDescriptionError,
                    }
                }/>
                <Input input={
                    {
                        ref : inputDate,
                        label: 'DUE DATE',
                        id: 'date',
                        type: 'date',
                        placeholder: 'dd/mm/yyyy',
                        error: inputDateError,
                    }
                }/>
            </section>
        </form>
    );
}

ProjectForm.propTypes = {};

ProjectForm.defaultProps = {};

export default ProjectForm;
