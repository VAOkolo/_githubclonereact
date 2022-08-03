
import axios from 'axios'

const url = "https://api.github.com/users/vaokolo/repos"

const loadResult = (data) => ({
    type: 'LOAD_RESULT',
    payload: data
});

const loadFollowers = (data) => ({
    type: 'LOAD_FOLLOWERS',
    payload: data
});

export const getResult = () => {
    return async dispatch => {
        try{
        const data = await getAPIResults()
        const followers = await getFollowers()
        console.log('getresults ',data)
        dispatch(loadResult(data))
        dispatch(loadFollowers(followers))
     
        } catch (err){
            console.warn(err.message);
        }
    }
};

export const getAPIResults = async () => {

    const response = await axios.get(url)
    const data = response.data
    console.log('return api',data)
    return data;
}

export const getFollowers = async () => {
const followers = 'https://api.github.com/users/VAOkolo/followers'
    const response = await axios.get(followers)
    const data = response.data
    console.log('followers',data)
    return data;
}
