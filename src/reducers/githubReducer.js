const initState = {
    userObject: {},
    followers: []
}

const githubReducer = (state=initState, action) => {
    switch(action.type){
        // case 'LOADING':
        //     return { ...state, location: action.payload, loading: true };
        case 'LOAD_RESULT':
            return {
                ...state, 
                userObject: action.payload,
             }
        case 'LOAD_FOLLOWERS':
            return {
                ...state, 
                followers: action.payload,
                };
        // case 'SET_ERROR':
        //     return { ...state, error: action.payload, loading: false }
        default: 
            return state;
    };
};

export default githubReducer;
