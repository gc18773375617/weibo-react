import React,{Component} from 'react'
import Axios from 'axios'
import '../css/list.scss'
class List extends Component{
    constructor(){
        super();
        this.state={
            weiboList:[],
            url_match:{
                '/':"/container/getIndex?containerid=102803&openApp=0&singce_id=",
                '/new':"/container/getIndex?containerid=102803_ctg1_7978_-_ctg1_7978&openApp=0&page=",
                "/funny":"/container/getIndex?containerid=102803_ctg1_4388_-_ctg1_4388&openApp=0&since_id=",
                "/qg":"/container/getIndex?containerid=102803_ctg1_1988_-_ctg1_1988&openApp=0&since_id=",
                "/stars":"/container/getIndex?containerid=102803_ctg1_4288_-_ctg1_4288&openApp=0&since_id=",
                "/sh":'/container/getIndex?containerid=102803_ctg1_4188_-_ctg1_4188&openApp=0$since_id=',
                "/sm":"/container/getIndex?containerid=102803_ctg1_5088_-_ctg1_5088&openApp=0&since_id=",
                "/sport":"/container/getIndex?containerid=102803_ctg1_1388_-_ctg1_1388&openApp=0&since_id=",
                "/cart":"/container/getIndex?containerid=102803_ctg1_5188_-_ctg1_5188&openApp=0&since_id=",
                "/movie":"/container/getIndex?containerid=102803_ctg1_3288_-_ctg1_3288&openApp=0&since_id=",
                "/game":"/container/getIndex?containerid=102803_ctg1_4888_-_ctg1_4888&openApp=0&since_id"
            },
            url_str:""
        }
    }
    componentDidMount(){
        let api_url = this.state.url_match[this.props.location.pathname];
        this.setState({
            url_str:this.props.location.pathname
        })
        Axios.get('/api'+api_url)
        .then(res=>{
            this.setState({
                weiboList:res.data.data.cards
            })
        });
        let scr_info = false;
        let sinc_id = 0;
        window.onscroll = ()=>{
            let all_height = document.body.clientHeight - document.documentElement.clientHeight;
            let scr_height = document.body.scrollTop || document.documentElement.scrollTop;
            if(scr_height > all_height-50){
            if(scr_info){
                return
            }
            sinc_id++;
            Axios.get('/api'+api_url+sinc_id)
            .then(res=>{
                let scr_list = this.state.weiboList;
                scr_list = scr_list.concat(res.data.data.cards);
                this.setState({
                    weiboList:scr_list
                })
            });
            scr_info = true;
            setTimeout(()=>{
                scr_info = false;
            },1500)
        }
        }
    }
    componentDidUpdate(){
        if(this.state.url_str !== this.props.location.pathname){
            document.body.scrollTop = 0;
            this.setState({
                            url_str:this.props.location.pathname
                        });
                        let api_url = this.state.url_match[this.props.location.pathname];
        this.setState({
            url_str:this.props.location.pathname
        })
        Axios.get('/api'+api_url)
        .then(res=>{
            this.setState({
                weiboList:res.data.data.cards
            })
        });
        let scr_info = false;
        let sinc_id = 0;
        window.onscroll = ()=>{
            let all_height = document.body.clientHeight - document.documentElement.clientHeight;
            let scr_height = document.body.scrollTop || document.documentElement.scrollTop;
            if(scr_height > all_height-50){
            if(scr_info){
                return
            }
            sinc_id++;
            Axios.get('/api'+api_url+sinc_id)
            .then(res=>{
                let scr_list = this.state.weiboList;
                scr_list = scr_list.concat(res.data.data.cards);
                this.setState({
                    weiboList:scr_list
                })
            });
            scr_info = true;
            setTimeout(()=>{
                scr_info = false;
            },1500)
        }
        }
        }
    }
    render(){
        let list = this.state.weiboList;
        list = list.map((vo,i)=>{
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