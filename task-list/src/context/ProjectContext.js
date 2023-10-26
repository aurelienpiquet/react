import React, {useContext, useReducer} from 'react';
import { listing } from '../fixtures/ProjectFixtures';

const defaultProjectContext = {
    projects: listing,
    addProject: (project) => {},
    removeProject: (project) => {},
    fetchListing: (project) => {},
    addTask: (project, task) => {},
    removeTask: (project, task) => {},
};

const ProjectContext = React.createContext(defaultProjectContext);

const projectReducer = (projectState, projectAction) => {
    let projects = [];

    if (projectAction.action === 'ADD_PROJECT') {
        projects = projectState.projects.concat(projectAction.project);
    }

    if (projectAction.action === 'REMOVE_PROJECT') {
        projects = projectState.projects.filter((project) => {
            return project.id !== projectAction.project.id;
        })
    }

    if (projectAction.action === 'ADD_TASK') {
        const projectIndex = projectState.projects.findIndex((project) => {
            return project.id === projectAction.project.id;
        })

        if (!projectState.projects[projectIndex].tasks) {
            projectState.projects[projectIndex].tasks = [];
        }

        projectState.projects[projectIndex].tasks.push(projectAction.task);

        projects = projectState.projects;
    }

    if (projectAction.action === 'REMOVE_TASK') {
        projects = projectState.projects.filter((project) => {
            if (+project.id === +projectAction.project) {
                project.tasks = project.tasks.filter((task) => {
                    return +task.id !== +projectAction.task;
                });

            }

            return project;
        })
    }

    return {
        projects: projects ?? [],
    }
}

export const ProjectContextProvider = (props) => {
    const [projectState, projectAction] = useReducer(projectReducer, defaultProjectContext);

    const fetchProjectHandler = (project) => {
        return projectState.projects.filter((item) => {
            return +item.id === +project;
        })[0] ?? false;
    }

    const addProjectHandler = (project) => {
        projectAction({
            action: 'ADD_PROJECT',
            project: project
        })
    }

    const removeProjectHandler = (project) => {
        projectAction({
            action: 'REMOVE_PROJECT',
            project: project
        })
    }

    const addTaskHandler = (project, task) => {
        projectAction({
            action: 'ADD_TASK',
            project: project,
            task: task,
        })
    }

    const removeTaskHandler = (project, task) => {
        projectAction({
            action: 'REMOVE_TASK',
            project: project,
            task: task,
        })
    }

    return (
        <ProjectContext.Provider value={
            {
                projects: projectState.projects,
                addProject: addProjectHandler,
                removeProject: removeProjectHandler,
                fetchListing: fetchProjectHandler,
                addTask: addTaskHandler,
                removeTask: removeTaskHandler,
            }
        }>
            { props.children }
        </ProjectContext.Provider>
    )
}

export default ProjectContext;