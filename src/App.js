import React from 'react';
import {BrowserRouter, Route, Link}  from  'react-router-dom';
import Header from './Header';
import Main from './Main';
import Catolog from './Catolog';
import Footer from './Footer';
import Product from './Product';
import Basket from './Basket';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orders : []
        }
    }

    componentDidMount(){
        fetch('api/user.json').then(data =>{
            return data.json()
        }).then(res=>{
            this.setState({
                orders : res.orders
            })
        })
    }
   

    addId(e){
        let orders = this.state.orders
        for(let i = 0; i<orders.length; i++){
            if(orders[i] == e){
                orders.splice(i, 1)
            }
        }
        orders.push(parseInt(e));
        this.setState({
            orders : orders
        })
       
    }
    removeProduct(p){
        this.setState({
            orders : p
        })

    }
    
    render(){
        return(
            <BrowserRouter>
                <div className="wrapper">
                    <Header orders={this.state.orders}/>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/catolog/:name' component={Catolog}/>
                    {/* <Route exact path='/product/:name' component={Product}/> */}
                    <Route exact path= '/basket/:name' component={Basket}/>
                    <Route exact path='/product/:name' render = {(props) => (<Product {...props} addId={e => this.addId(e)}/>)}/>
                    <Route exact path='/basket' render = {(props) => (<Basket {...props} removeProduct={p => this.removeProduct(p)} orders={this.state.orders}/>)}/>
                    <Footer/>
                </div>
                
            </BrowserRouter>
        )
        
    }
}

export default App