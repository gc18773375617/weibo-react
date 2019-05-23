import React,{Component} from 'react'
import '../css/head.scss'
import {withRouter} from 'react-router-dom'
class Head extends Component{
    constructor(){
        super()
        this.state={
            isDown:true,
            url_str:""
        }
    }
    titlehide=(event)=>{
        this.setState({
            isDown:!this.state.isDown
        })
    }
    urlClick = (event)=>{
       this.props.history.push(event.target.dataset.url)
    }
    componentDidMount(){
        this.setState({
            url_str:this.props.location.pathname
        })
    }
    componentDidUpdate(){
        if(this.state.url_str === this.props.location.pathname){

        }else{
            this.setState({
                url_str:this.props.location.pathname
            })
        }
    }
    render(){
        return(
            <div className='head-box'>
                <div className='head-top'>
                    <div className='head-logo'></div>
                    <div className='head-search'></div>
                </div>
                <div className='head-item'>
                    <div className='item-box'>
                        <ul>
                            <li onClick={this.urlClick} data-url="/" className={this.state.url_str === '/'?'cur':""}>热门</li>
                            <li onClick={this.urlClick} data-url="/new" className={this.state.url_str === '/new'?'cur':""}>新鲜事</li>
                            <li onClick={this.urlClick} data-url="/funny" className={this.state.url_str === '/funny'?'cur':""}>搞笑</li>
                            <li onClick={this.urlClick} data-url="/qg" className={this.state.url_str === '/qg'?'cur':""}>情感</li>
                            <li onClick={this.urlClick} data-url="/stars" className={this.state.url_str === '/stars'?'cur':""}>明星</li>
                            <li onClick={this.urlClick} data-url="/sh" className={this.state.url_str === '/sh'?'cur':""}>社会</li>
                            <li onClick={this.urlClick} data-url="/sm" className={this.state.url_str === '/sm'?'cur':""}>数码</li>
                            <li onClick={this.urlClick} data-url="/sport" className={this.state.url_str === '/sport'?'cur':""}>体育</li>
                            <li onClick={this.urlClick} data-url="/cart" className={this.state.url_str === '/cart'?'cur':""}>汽车</li>
                            <li onClick={this.urlClick} data-url="/movie" className={this.state.url_str === '/movie'?'cur':""}>电影</li>
                            <li onClick={this.urlClick} data-url="/game" className={this.state.url_str === '/game'?'cur':""}>游戏</li>
                        </ul>
                    </div>
                    <div onClick={this.titlehide} className='item-button'>
                        <div className={this.state.isDown?"":"item-button_cli"}></div>
                    </div>
                </div>
                <div className={this.state.isDown?"bigItem":"bigItem bigItem_show"}>
                        <ul>
                            <li className={this.state.url_str === '/'?"item_sel":""}><span onClick={this.urlClick} data-url="/">热门</span> </li>
                            <li className={this.state.url_str === '/new'?"item_sel":""}><span  onClick={this.urlClick} data-url="/new">新鲜事</span></li>
                            <li className={this.state.url_str === '/funny'?"item_sel":""}><span onClick={this.urlClick} data-url="/funny">搞笑</span></li>
                            <li className={this.state.url_str === '/qg'?"item_sel":""}><span onClick={this.urlClick} data-url="/qg">情感</span></li>
                            <li className={this.state.url_str === '/stars'?"item_sel":""}><span onClick={this.urlClick} data-url="/stars">明星</span></li>
                            <li className={this.state.url_str === '/sh'?"item_sel":""}><span onClick={this.urlClick} data-url="/sh">社会</span></li>
                            <li className={this.state.url_str === '/sm'?"item_sel":""}><span onClick={this.urlClick} data-url="/sm">数码</span></li>
                            <li className={this.state.url_str === '/sport'?"item_sel":""}><span onClick={this.urlClick} data-url="/sport">体育</span></li>
                            <li className={this.state.url_str === '/cart'?"item_sel":""}><span onClick={this.urlClick} data-url="/cart">汽车</span></li>
                            <li className={this.state.url_str === '/movie'?"item_sel":""}><span onClick={this.urlClick} data-url="/movie">电影</span></li>
                            <li className={this.state.url_str === '/game'?"item_sel":""}><span onClick={this.urlClick} data-url="/game">游戏</span></li>
                        </ul>
                    </div>
            </div>
        )
    }
}
export default withRouter(Head)