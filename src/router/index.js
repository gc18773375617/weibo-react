import React,{Component} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import List from '../dom/list'
class Routers extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/' component={List}/>
                </Switch>
            </Router>
        )
    }
}
export default Routers