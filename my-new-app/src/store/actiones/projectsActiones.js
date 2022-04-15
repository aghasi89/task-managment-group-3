import { projectsTypes } from "../types";

export const addNewProject = (newProject) => {
  return {
    type: projectsTypes.ADD_NEW_PROJECT,
    payload: newProject
  };
};

export const getProjects = (projects) => {
  return {
    type: projectsTypes.GET_PROJECTS,
    payload: projects
  };
};

export const addNewProjectFailuer = (errorMesage) => {
  return {
    type: projectsTypes.ADD_NEW_PROJECT_FAILUER,
    payload: errorMesage
  };
};

export const deletProject = (project) => {
  return {
    type: projectsTypes.DELET_PROJECT,
    payload: project
  };
};

export const deletProjectError = () => {
  return {
    type: projectsTypes.DELET_PROJECT_ERROR,
    payload: ""
  };
};
