import React from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';

class CardGood extends React.Component{
    render(){
        return(
            <div className="cardGood">
                        <img src={this.props.img} width="260" height="260" alt={this.props.name}></img>
                        <Link to={this.props.nameId}>{this.props.name}</Link>
                        <p>{this.props.price} руб.</p>
            </div>
        )
    }
}
export default CardGood 