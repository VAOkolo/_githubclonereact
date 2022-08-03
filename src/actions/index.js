import axios from 'axios'

export default async function fetchUserData(){

    const response = await axios.get(`https://api.github.com/users/vaokolo/repos`)
    const data = await response.data;
    console.log(response)

    return data
}
