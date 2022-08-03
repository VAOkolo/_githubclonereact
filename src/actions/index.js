import axios from 'axios'

const url = "https://api.github.com/users/vaokolo/repos"

// const loading = githubUser => ({ type: 'LOADING', payload: githubUser });

const loadResult = ( name ) => ({
    type: 'LOAD_RESULT',
    payload: name
});

export default function getResult(){
    return async dispatch => {
        try{
            const userData = await axios.get(url)
            const name = userData.data[0].name
            console.log(name)
            dispatch(loadResult(name))
        } catch (err){
            console.warn(err.message);
        }
    }
}


/////////////////////////
// async function fetchUserData() {
//     try{
        // const response = await axios.get(`https://api.github.com/users/${githubUser}/repos`)
        // const response = await axios.get(url)
        // console.log(response)
        // return response
        // const data = response.data[0]
        // console.log(data)
        // const name = data.name
        // return name
    // } catch (err) {
    //     if (data.status === 404) { throw Error('Not a valud Gitub user') }
    //     throw new Error(err.message)
    // }
            // data.name
            // description: data.description, 
            // stargazers_count: data.stargazers_count, 
            // forks_count: data.forks_count, 
            // open_issues: data.open_issues, 
            // updated_at: data.updated_at

// }


