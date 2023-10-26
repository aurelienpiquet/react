import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectDetails.module.scss';
import Task from "../../Task/Task";
import Button from "../../Ui/Button/Button";
import Error from "../../Ui/Error/Error";
import ProjectDeleteComfirmation from "../ProjectDeleteComfirmation/ProjectDeleteComfirmation";

const ProjectDetails = (props) => {
    const date = (new Date(props.item.date)).toDateString();

    const [show, setShow] = useState(false);

    const onDeleteHandler = (forced) => {
        if (props.item.tasks.length > 0 && !forced) {
            setShow(true);

            return;
        }

        props.onDelete(props.item);
    }

    return (
        <div className={styles.ProjectDetails}>
            { show &&
                <ProjectDeleteComfirmation
                    onDelete={ onDeleteHandler.bind(null, true) }
                    onCanceled={ setShow.bind(null, false)}
                />
            }

            <div className={styles.ProjectDetailsTitle}>
                <h1> { props.item.title }</h1>
                <Button
                    color='white'
                    onClick={ onDeleteHandler.bind(null, false) }
                >Delete</Button>
            </div>

           <section>
               <p className={styles.date}>{ date }</p>
               <p className={styles.description}>{ props.item.description }</p>
           </section>
            <Task tasks={props.item.tasks}
                project={props.item}
            />
        </div>
    )
}

ProjectDetails.propTypes = {};

ProjectDetails.defaultProps = {};

export default ProjectDetails;
