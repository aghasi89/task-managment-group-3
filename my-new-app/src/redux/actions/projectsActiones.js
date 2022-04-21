import projectsTypes from "../actionsTypes/projectsTypes";

export const setNewProject = (project) => {
  return {
    type: projectsTypes.SET_NEW_PROJECT,
    payload: project
  };
};

export const askForProjects = () => {
  return {
    type: projectsTypes.ASK_FOR_PROJECTS
  };
};

export const getProjects = (projects) => {
  return {
    type: projectsTypes.GET_PROJECTS,
    payload: projects
  };
};

export const setCuuentProject = (project) => {
  return {
    type: projectsTypes.SET_CURRENT_PROJECT,
    payload: project
  };
};

export const getCuuentProject = (project) => {
  return {
    type: projectsTypes.GET_CURRENT_PROJECT,
    payload: project
  };
};

export const deleteProject = (project) => {
  return {
    type: projectsTypes.DELETE_PROJECT,
    payload: project
  };
};

