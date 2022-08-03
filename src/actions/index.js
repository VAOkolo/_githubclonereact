
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
    try{   
        const url = `https://api.github.com/users/${searchTerm}/repos`
        const response = await axios.get(url)
        console.log('getapiresults', response)
        const data = response.data
        console.log('return api',data)
        return data;

    } catch(err){
       
        throw new Error(err.message)
    }
 
}

export const getFollowers = async (searchTerm) => {
    try{
        const followers = `https://api.github.com/users/${searchTerm}/followers`
        const response = await axios.get(followers)
        const data = response.data
        return data;
    }catch(err){
        throw new Error(err.message)
    }

}
