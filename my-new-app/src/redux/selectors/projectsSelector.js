export const projectsSelector = (state) => {
  return state.projects.projects
};


export const currentProjectIDSelector = (state) => {
  return state.projects.currentProject.ID
};

export const currentProjectSelector = (state) => {
  return state.projects.currentProject
};