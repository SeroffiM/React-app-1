import React from 'react'
import NewsItem from "./NewsItem/NewsItem";

const News = (props) => {

    const {news} = props



    return (

        <div className="accordion" id="accordionExample">
            {news.map((item) => <NewsItem key={item.id} newsItem={item}/>)}
        </div>
    )
}

export default News