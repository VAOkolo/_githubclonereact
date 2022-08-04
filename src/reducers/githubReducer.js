const initState = {
    userObject: {},
    followers: [],
    userInfo:{},
    loading: false,
    searchTerm: ''
}

const githubReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            console.log('loadging state in reducer', state.loading)
            return { ...state, searchTerm: action.payload, loading: true };
        case 'LOAD_RESULT':
            return {
                ...state, 
                userObject: action.payload, loading: false
             }
        case 'LOAD_FOLLOWERS':
            console.log('loadging followers in reducer', state.loading)
            return {
                ...state, 
                followers: action.payload, loading: false
                };
        case 'LOAD_USERINFO':
            return {
                ...state, 
                userInfo: action.payload, loading: false
                };
        // case 'SET_ERROR':
        //     return { ...state, error: action.payload, loading: false }
        default: 
            return state;
    };
};

export default githubReducer;
