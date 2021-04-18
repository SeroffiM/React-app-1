import React, {useEffect} from "react";
import './Body.css'
import {Route, Switch} from "react-router";
import News from "./News/News";
import CreateNews from "./CreateNews/CreateNews";
import {connect} from "react-redux";
import getNews from "../../redux/actionCreators/getNews";


const Body = (props) => {
    const {getNews, news} = props


    useEffect(() => {
        getNews()
    }, [])


    return (
        <div className='body__news'>
            <Switch>
                <Route exact path='/' render={() => <News news={news}/>}></Route>
                <Route path='/create_news' render={() => <CreateNews/>}></Route>
            </Switch>
        </div>
    )
}


const mapStateToProps = state => ({
    news: state.news
})

const mapDispatchToProps = dispatch => ({
    getNews: () => dispatch(getNews())
})


const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body)

export default BodyContainer