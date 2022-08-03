import githubObjectData from '../githubObjectData'

const {name,
description,
stargazers_count,
forks_count,
open_issues,
updated_at} = githubObjectData[0]

const loadResult = () => ({
    type: 'LOAD_RESULT',
    payload: ' i am a github user'
});


export const getResult = () => {
        console.log('*****inside get result',name,
        description,
        stargazers_count,
        forks_count,
        open_issues,
        updated_at )
    return dispatch => {
         dispatch({
            type: 'LOAD_RESULT',
            payload: githubObjectData[0]
        })
    };
};
