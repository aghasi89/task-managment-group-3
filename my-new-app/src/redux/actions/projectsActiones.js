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
