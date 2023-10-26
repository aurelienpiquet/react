import React, {useContext, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TaskForm.module.scss';
import Input from "../../Ui/Input/Input";
import Button from "../../Ui/Button/Button";
import ProjectContext from "../../../context/ProjectContext";

const TaskForm = (props) => {
    const inputRef = useRef();
    const [error, setError] = useState(false);

    const projectCtx = useContext(ProjectContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const task = {
            title : inputRef.current.value,
            id: (Math.random() * 100).toFixed(0),
        }

        if (task.title === '') {
            setError(true);

            return;
        }

        projectCtx.addTask(props.project, task);
        inputRef.current.value = '';
        setError(false);
    }

    return (
        <form className={styles.TaskForm}
            onSubmit={ onSubmitHandler }
        >
            <Input
                input={
                {
                    ref : inputRef,
                    id: 'task',
                    type: 'text',
                    error: error,
                    width: '70%',
                }
            }/>
            <Button
                type='Submit'
                color='white'
                >Add Task
            </Button>
        </form>
    );
}

TaskForm.propTypes = {};

TaskForm.defaultProps = {};

export default TaskForm;
