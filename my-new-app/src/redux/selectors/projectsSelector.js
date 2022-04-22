export const projectsSelector = (state) => {
  return state.projectsReduser.projects
};


export const currentProjectIDSelector = (state) => {
  return state.projectsReduser.currentProject.ID
};

export const currentProjectSelector = (state) => {
  return state.projectsReduser.currentProject
};