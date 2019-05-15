import React,{Component} from 'react'
import '../css/head.scss'
class Head extends Component{
    render(){
        return(
            <div className='head-box'>
                <div className='head-top'>
                    <div className='head-'></div>
                    <div className='head-search'>

                    </div>
                </div>
                <div className='head-item'>
                    <ul>
                        <li>热门</li>
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
            </div>
        )
    }
}
export default Head