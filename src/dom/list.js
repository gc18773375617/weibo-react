import React,{Component} from 'react'
import Axios from 'axios'
class List extends Component{
    componentDidMount(){
        Axios.get('/weibo/api/container/getIndex?containerid=102803&openApp=0')
        .then(res=>{
            console.log(res)
        })
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}
export default List