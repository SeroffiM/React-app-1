import React, {useState} from 'react'
import './CreateNews.css'
import {createNewsAction} from "../../../redux/actionCreators/createNews";
import {connect} from "react-redux";

const CreateNews = (props) => {

    const {createNews,news} = props
    const [newsTitle, setTitle] = useState('')
    const [newsBody, setBody] = useState('')
    const useTitle = (event) => {
        setTitle(event.target.value)
    }
    const useBody = (event) => {
        setBody(event.target.value)
    }
    const handlerNews = () => {
        const id = news.length + 1
        const newNews = {title: newsTitle, body: newsBody,id:id}
        createNews(newNews)
        setTitle('')
        setBody('')
    }
    return (

        <div className='create-news__container'>
            <div className='create-news__title'>
                <p>News title</p>
                <textarea value={newsTitle} onChange={useTitle}/>


            </div>
            <div className='create-news__body'>
                <p>News body</p>
                <textarea value={newsBody} onChange={useBody}/>
            </div>
            <button onClick={handlerNews}>Add new news</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    createNews: data => dispatch(createNewsAction(data))
})

const mapStateToProps = state => ({
    news: state.news
})


const CreateNewsContainer = connect(mapStateToProps, mapDispatchToProps)(CreateNews)

export default CreateNewsContainer