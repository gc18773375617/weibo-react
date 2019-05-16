import React,{Component} from 'react'
import '../css/head.scss'
import {withRouter} from 'react-router-dom'
class Head extends Component{
    constructor(){
        super()
        this.state={
            isDown:true
        }
    }
    titlehide=(event)=>{
        this.setState({
            isDown:!this.state.isDown
        })
    }
    render(){
        return(
            <div className='head-box'>
                <div className='head-top'>
                    <div className='head-logo'></div>
                    <div className='head-search'>

                    </div>
                </div>
                <div className='head-item'>
                    <div className='item-box'>
                        <ul>
                            <li>热门{this.state.isDown}</li>
                            <li>新鲜事</li>
                            <li>附近</li>
                            <li>搞笑</li>
                            <li>情感</li>
                            <li>明星</li>
                            <li>社会</li>
                            <li>数码</li>
                            <li>体育</li>
                            <li>汽车</li>
                            <li>电影</li>
                            <li>游戏</li>
                        </ul>
                    </div>
                    <div onClick={this.titlehide} className='item-button'>
                        <div className={this.state.isDown?"":"item-button_cli"}></div>
                    </div>
                </div>
                <div className={this.state.isDown?"bigItem":"bigItem bigItem_show"}>
                        <ul>
                            <li> <span>热门</span> </li>
                            <li><span>新鲜事</span></li>
                            <li><span>附近</span></li>
                            <li><span>搞笑</span></li>
                            <li><span>情感</span></li>
                            <li><span>明星</span></li>
                            <li><span>社会</span></li>
                            <li><span>数码</span></li>
                            <li><span>体育</span></li>
                            <li><span>汽车</span></li>
                            <li><span>电影</span></li>
                            <li><span>游戏</span></li>
                        </ul>
                    </div>
            </div>
        )
    }
}
export default withRouter(Head)