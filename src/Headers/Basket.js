import React from 'react';
import {Link} from 'react-router-dom';

class Basket extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            orders : []
            
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            fetch('/api/user.json').then(answer=>{
                return answer.json()
            }).then(respon =>{
                this.setState(
                    this.state = respon
                    // this.state.email = respon.email,
                    // this.orders = respon.orders
                )
                console.log(this.state)
            })
        }, 1)
    }

    render(){
        return(
            <div className="basket_component">
                <div className="user">Привет, {this.state.name} (<Link to="/out">Выйти</Link>)</div>
                
                <Link className="basket" to="/basket">Корзина ({this.state.orders.length >0 ? this.state.orders.length : '0'})</Link>
            </div>
        )
    }
}

export default Basket