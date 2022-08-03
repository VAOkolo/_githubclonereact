const initState = {
    userObject: {}
}

const githubReducer = (state=initState, action) => {
    switch(action.type){
        // case 'LOADING':
        //     return { ...state, location: action.payload, loading: true };
        case 'LOAD_RESULT':
            console.log('i am in load result', action.payload)
            return {
                ...state, 
                userObject: action.payload,
             };
        // case 'SET_ERROR':
        //     return { ...state, error: action.payload, loading: false }
        default: 
            return state;
    };
};

export default githubReducer;
