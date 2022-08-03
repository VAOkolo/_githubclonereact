const initState = {
    name: "",
    description: "",
    stargazers_count: "",
    forks_count: "",
    open_issues: "",
    updated_at: "",
    // loading: false,
    // error: false,
}

const githubReducer = (state=initState, action) => {
    switch(action.type){
        // case 'LOADING':
        //     return { ...state, location: action.payload, loading: true };
        case 'LOAD_RESULT':
            console.log('i am in load result')
            return {
                ...state, 
                name: action.payload.name,
                description: action.payload.description,
                stargazers_count: action.payload.stargazers_count,
                forks_count: action.payload.forks_count,
                open_issues: action.payload.open_issues,
                updated_at: action.payload.updated_at,

             };
        // case 'SET_ERROR':
        //     return { ...state, error: action.payload, loading: false }
        default: 
            return state;
    };
};

export default githubReducer;
