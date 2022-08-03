const initState = {
    userObject: {},
    followers: [], 
    error: false
}

const githubReducer = (state=initState, action) => {
    switch(action.type){
        // case 'LOADING':
        //     return { ...state, location: action.payload, loading: true };
        case 'LOAD_RESULT':
            return {
                ...state, 
                userObject: action.payload, error: false,
             }
        case 'LOAD_FOLLOWERS':
            return {
                ...state, 
                followers: action.payload, error: false,
                }
        case 'SET_ERROR':
            return { ...state, error: action.payload,  }
        default: 
            return state;
    };
};

export default githubReducer;
