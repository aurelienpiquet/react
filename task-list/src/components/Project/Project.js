import React, {Fragment, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Project.module.scss';
import Sidebar from "../Ui/Sidebar/Sidebar";
import Button from "../Ui/Button/Button";
import ProjectForm from "./ProjectForm/ProjectForm";
import ProjectContext from "../../context/ProjectContext";
import ProjectList from "./ProjectList/ProjectList";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import {fetchInListing} from "../../fixtures/ProjectFixtures";

const Project = () =>  {
    const [show, setShow] = useState({
        details: false,
        form: false,
    })

    const projectCtx = useContext(ProjectContext);

    const onShowDetailsHandler = (id) => {
        setShow({
            details: projectCtx.fetchListing(id),
            form: false
        })
    }

    const onAddProjectHandler = (project) => {
        projectCtx.addProject(project);

        setShow({
            details: project,
            form: false
        })
    }

    const onShowFormHandler = (value) => {
        setShow({
            details: false,
            form: value
        })
    }

    const onDeleteHandler = (item) => {
        projectCtx.removeProject(item);

        setShow({
            details: false,
            form: false,
        })
    }


    return (
        <div className={styles.Project}>
            <ProjectList
                onShowForm={ onShowFormHandler.bind(null, true) }
                onShowDetails={ onShowDetailsHandler }
                selected={ show.details ? show.details.id : false }
            />

            <div className={styles.ProjectBody}>
                { !show.form && !show.details &&
                    <Fragment>
                        <h1>No Project Selected</h1>
                        <p>Select a project or get started with a new one</p>
                        <Button onClick={ onShowFormHandler.bind(null, true) } color='grey'>Create new project</Button>
                    </Fragment>
                }

                { show.form && !show.details &&
                    <ProjectForm
                        onClose={ onShowFormHandler.bind(null, false) }
                        onAddProject={ onAddProjectHandler }
                    />
                }

                { !show.form && show.details &&
                    <ProjectDetails
                        item={ show.details }
                        onDelete={ onDeleteHandler }
                    />
                }
            </div>
        </div>
    );

}
Project.propTypes = {};

Project.defaultProps = {};

export default Project;
