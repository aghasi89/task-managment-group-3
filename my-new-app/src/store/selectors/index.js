export const loginStatusSelector = (state) => {
    return state.LoginStatus;
};

export const membersListSelector = (state) => {
    return state.members;
};

export const projectsListSelector = (state) => {
    return state.projects;
};
export const tasksListSelector = (state) => {
    return state.tasks;
};

export const mainPageSelector = (state) => {
    return {
        logerMember: state.logerMember,
        members: state.mambers,
        projects: stateProjects,
    };
};