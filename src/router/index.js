import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import List from '../dom/list'
class Routers extends Component{
    render(){
        return(
                <Switch>
                    <Route path='/' component={List}/>
                </Switch>
        )
    }
}
export default Routers