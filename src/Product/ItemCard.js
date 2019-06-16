import React from 'react';
import {Link} from 'react-router-dom';

class ItemCard extends React.Component{
    render(){
        return(
            <div className="itemCard">
                <img src={this.props.img} alt={this.props.name} width="40%"></img>
                <h1>{this.props.name}</h1>
                <p>Артикуль {this.props.id}</p>
                <h4>Цена {this.props.price} руб.</h4>
                <h3>{this.props.decription}</h3>
                <h4>размер</h4>
                <div className="size">
                {
                    this.props.size.map((val)=>
                        <div>{val}</div>
                    )
                }
                </div>
                <Link to={this.props.linkBasket}>Добавить в корзину</Link>
                
            </div>
        )
    }
}
export default ItemCard