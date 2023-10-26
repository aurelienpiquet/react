import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styles from './TaskItem.module.scss';
import Button from "../../Ui/Button/Button";
import ProjectContext from "../../../context/ProjectContext";

const TaskItem = (props) => {
    const projectCtx = useContext(ProjectContext);

    const onRemoveHandler = () => {
        projectCtx.removeTask(props.project.id, props.task.id)
}

return (
        <li className={styles.TaskItem}>
            <div>{ props.task.title }</div>
            <Button
                color='white'
                onClick={ onRemoveHandler }
            >Clear</Button>
        </li>
    );
}

TaskItem.propTypes = {};

TaskItem.defaultProps = {};

export default TaskItem;
