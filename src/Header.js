import React from 'react';

import Nav from './Headers/Nav';
import Basket from './Headers/Basket'

class Header extends React.Component{
    render(){
        return(
            <div className="Navigation">
                <Nav/>
                <Basket orders={this.props.orders}/>
            </div>
        )
    }
} 

export default Header;