import axios from 'axios'

const loading = searchTerm => ({ type: 'LOADING', payload: searchTerm });

const loadResult = (data) => ({
    type: 'LOAD_RESULT',
    payload: data
});

const loadFollowers = (data) => ({
    type: 'LOAD_FOLLOWERS',
    payload: data
});

const loadUserInfo = (data) => ({
    type: 'LOAD_USERINFO',
    payload: data
});

export const getResult = (searchTerm) => {
    return async dispatch => {
       dispatch(loading(searchTerm)) 
        try{
        const data = await getAPIResults(searchTerm)
        const followers = await getFollowers(searchTerm)
        const userInfo = await getUserInfo(searchTerm)
        dispatch(loadResult(data))
        dispatch(loadFollowers(followers))
        dispatch(loadUserInfo(userInfo))
     
        } catch (err){
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        }
    }
};

export const getAPIResults = async (searchTerm) => {
    const url = `https://api.github.com/users/${searchTerm}/repos`
    const response = await axios.get(url)
    const data = response.data
    data.sort(function(a,b){
        return new Date(b.created_at) - new Date(a.created_at)
      })
    return data;
}

export const getFollowers = async (searchTerm) => {
const followers = `https://api.github.com/users/${searchTerm}/followers`
    const response = await axios.get(followers)
    const data = response.data
    return data;
}

export const getUserInfo = async (searchTerm) => {
    const followers = `https://api.github.com/users/${searchTerm}`
        const response = await axios.get(followers)
        const data = response.data
        return data;
    }
    