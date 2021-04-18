import React from "react";
import './NewsPage.css'
import Header from "../Header/Header";
import Body from "../Body/Body";

const NewsPage = () => {
    return (
        <div className='newsPage__container'>
            <Header/>
            <Body/>
        </div>
    )
}

export default NewsPage