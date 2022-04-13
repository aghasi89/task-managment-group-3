import types from "../types";

const INIT_STATE = {
    LoginStatus: false,
    members: [
        {
            name: "Admin",
            emai: "admin.damin@gmail.com",
            pasword: "",
        }
    ],
    projects:[],
    tasks:[],
};

const reducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;

    return state;
};

export default reducer;
