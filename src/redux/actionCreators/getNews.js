import {GET_NEWS} from "../actionTypes/actionTypes";

const getNewsApi = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
    )
}
export const getNewsAction = (data) => {
    return {
        type: GET_NEWS,
        payload: data
    }
}

const getNews = () => async dispatch => {
    const news = await getNewsApi()
    dispatch(getNewsAction(news))
}

export default getNews