import githubObjectData from '../githubObjectData'
import axios from 'axios'

const url = "https://api.github.com/users/vaokolo/repos"

const loadResult = (data) => ({
    type: 'LOAD_RESULT',
    payload: data
});


export const getResult = () => {
    return async dispatch => {
        try{
        const data = await getAPIResults()
        dispatch(loadResult(data))
        console.log(data)
        } catch (err){
            console.warn(err.message);
        }
    }
};

export const getAPIResults = async () => {

    const response = await axios.get(url)
    const data = response.data
    // console.log(data)
    return data;
}
