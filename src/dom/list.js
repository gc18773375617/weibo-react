import React,{Component} from 'react'
import Axios from 'axios'
import '../css/list.scss'
class List extends Component{
    constructor(){
        super();
        this.state={
            weiboList:[]
        }
    }
    componentDidMount(){
        Axios.get('/api/container/getIndex?containerid=102803&openApp=0')
        .then(res=>{
            this.setState({
                weiboList:res.data.data.cards
            })
            console.log(this.state.weiboList)
        });
        window.addEventListener('scroll', () =>
            console.log(document.body.scrollTop || document.documentElement.scrollTop)
        )
    }
    render(){
        let list = this.state.weiboList;
        list = list.map((vo,i)=>{
            let pic_dom = '';
            let pic_list = '';
            if(vo.mblog.pics !== undefined){
                let pic_dom = vo.mblog.pics
                pic_list = pic_dom.map((bd,k)=>{
                    return(
                        <div key={k}>
                            <div>
                                <img src={bd.url} alt=""/>
                            </div>
                        </div>
                    )
                });
            }else if(vo.mblog.page_info !== undefined){
                pic_list = <div className="list_bigPic">
                    <div>
                        <img src={vo.mblog.page_info.page_pic.url} alt=""/>
                    </div>
                </div>
            }
            return(
                <div key={i}>
                    <header className="list_head">
                        <div className="list_logo"><img src={vo.mblog.user.avatar_hd} alt=""/></div>
                        <div className="list_title">
                            <h1>{vo.mblog.user.screen_name}</h1>
                            <p>{vo.mblog.created_at} 来自 {vo.mblog.source}</p>
                        </div>
                    </header>
                    <article className="list_content">
                        <div>
                            <div>
                                <div className="list_text">
                                <p dangerouslySetInnerHTML={{ __html: vo.mblog.text }}  />
                                </div>
                                <div className="list_img">
                                    {pic_list}
                                </div>
                            </div>
                        </div>
                    </article>
                    <footer>
                        <div>
                            转发:{vo.mblog.reposts_count >= 10000?parseInt(vo.mblog.reposts_count/10000)+"万+":vo.mblog.reposts_count}
                        </div>
                        <div>
                            评论:{vo.mblog.comments_count >= 10000?parseInt(vo.mblog.comments_count/10000)+"万+":vo.mblog.comments_count}
                        </div>
                        <div>
                            赞:{vo.mblog.attitudes_count >= 10000?parseInt(vo.mblog.attitudes_count/10000)+"万+":vo.mblog.attitudes_count}
                        </div>
                    </footer>
                </div>
            )
        })
        return(
            <div className="list_box">
                {list}
            </div>
        )
    }
}
export default List