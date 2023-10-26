import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './TaskList.module.scss';
import TaskItem from "../TaskItem/TaskItem";

const TaskList = (props) => {

    const tasks = props.tasks.map((task) => {
        return <TaskItem
            task={task}
            project={props.project}
        />;
    })

    return (
        <Fragment>
            { tasks.length > 0 &&
                <div className={styles.TaskList}>
                    <ul>{tasks}</ul>
                </div>
            }

            { tasks.length === 0 && <p>Listing is empty.</p>}
        </Fragment>
    );
}

TaskList.propTypes = {};

TaskList.defaultProps = {};

export default TaskList;
