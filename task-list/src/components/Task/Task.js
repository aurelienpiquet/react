import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.scss';
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";

const Task = (props) => {

    return (
        <div className={styles.Task}>
            <h3>Tasks</h3>
            <TaskForm project={props.project} />
            { props.tasks && <TaskList tasks={props.tasks} project={props.project}/> }
            { !props.tasks && <p>Task list is empty.</p> }
        </div>
    );
}

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
