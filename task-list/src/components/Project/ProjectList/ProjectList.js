import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectList.module.scss';
import Sidebar from "../../Ui/Sidebar/Sidebar";
import Button from "../../Ui/Button/Button";
import ProjectContext from "../../../context/ProjectContext";

const ProjectList = (props) => {
    const projectCtx = useContext(ProjectContext);
    
    const onShowDetailsHandler = (event) => {
        props.onShowDetails(event.target.id);
    }

    const projectListBtn =  projectCtx.projects.map((project) => {
        return <li className={ props.selected === project.id ? `${styles.selected}`  : ''}>
            <a
                id={ project.id }
                onClick={ onShowDetailsHandler }
                href='#'
            >{ project.title }</a>
        </li>
    });

    return (
        <Sidebar className={styles.ProjectList}>
            <h1>Your Projects</h1>
            <Button
                color='grey'
                onClick={ props.onShowForm }
            >+ Add Project</Button>
            { projectCtx.projects.length === 0 && <p>List is empty.</p> }
            { projectCtx.projects.length > 0 &&
                <ul>{ projectListBtn }</ul>
            }
        </Sidebar>
    );
}

ProjectList.propTypes = {};

ProjectList.defaultProps = {};

export default ProjectList;
