import types from "../types";

const INIT_STATE = {
    LoginStatus: false,
    members: [
        {
            name: "Admin",
            email: "admin.damin@gmail.com",
            pasword: "****",
        }
    ],
};

const reducer = (state = INIT_STATE, action) => {
    //const { type, payload } = action;

    return state;
};

export default reducer;
