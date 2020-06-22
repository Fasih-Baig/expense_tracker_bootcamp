const LogReducer = ((state, action) => {
    switch(action.type) {
        case "Add_Log": {
            return [action.payload, ...state]
        }
        default: 
            return state;
    }
})

export default LogReducer;