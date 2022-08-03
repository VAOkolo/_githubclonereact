const initState = {
    // name: "",
    description: "",
    stargazers_count: "",
    forks_count: "",
    open_issues: "",
    updated_at: "",
    name: "",
    loading: false,
    error: false,
}

const githubReducer = (state=initState, action) => {
    switch(action.type){
        // case 'LOADING':
        //     return { ...state, loading: true };
        case 'LOAD_RESULT':
            return { ...state, name: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    };
};

export default githubReducer;
