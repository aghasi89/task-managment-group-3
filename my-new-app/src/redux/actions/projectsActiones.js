import projectsTypes from "../actionsTypes/projectsTypes";

export const addNewProject = (project) => {
  return {
    type: projectsTypes.ADD_NEW_PROJECT,
    payload: project
  };
};

export const getProjects = () => {
  return {
    type: projectsTypes.GET_PROJECTS
  };
};

export const setProjects = (projects) => {
  return {
    type: projectsTypes.SET_PROJECTS,
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

