import axios from 'axios'

const loadResult = (data) => ({
    type: 'LOAD_RESULT',
    payload: data
});

const loadFollowers = (data) => ({
    type: 'LOAD_FOLLOWERS',
    payload: data
});

export const getResult = (searchTerm) => {
    return async dispatch => {
        try{
        const data = await getAPIResults(searchTerm)
        const followers = await getFollowers(searchTerm)
        console.log('getresults ',data)
        dispatch(loadResult(data))
        dispatch(loadFollowers(followers))
     
        } catch (err){
            console.warn(err.message);
        }
    }
};

export const getAPIResults = async (searchTerm) => {
    const url = `https://api.github.com/users/${searchTerm}/repos`
    const response = await axios.get(url)
    console.log('getapiresults', response)
    const data = response.data
    data.sort(function(a,b){
        return new Date(b.created_at) - new Date(a.created_at)
      })
    console.log('return api',data)
    return data;
}

export const getFollowers = async (searchTerm) => {
const followers = `https://api.github.com/users/${searchTerm}/followers`
    const response = await axios.get(followers)
    const data = response.data
    return data;
}

