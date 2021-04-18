import React, {useState} from 'react'
import './NewsItem.css'

const NewsItem = (props) => {
    const {newsItem} = props

    const [activeClass, setActiveClass] = useState('collapse')

    function showNews() {
        activeClass === 'collapse' ? setActiveClass('collapse show') : setActiveClass('collapse')
    }

    return (
        <div className="card">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button onClick={() => showNews()} className="btn btn-link" type="button" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {newsItem.title}
                    </button>
                </h2>
            </div>

            <div id="collapseOne" className={activeClass} aria-labelledby="headingOne"
                 data-parent="#accordionExample">
                <div className="card-body">
                    {newsItem.body}
                </div>
            </div>
        </div>
    )
}

export default NewsItem