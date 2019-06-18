import React from 'react';
import {Link} from 'react-router-dom';

class ItemCard extends React.Component{

    addId(e){
        this.props.addId(e.target.name)
    }

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
                <button onClick={(e) => this.addId(e)} name={this.props.id}>Добавить в корзину</button>
                
            </div>
        )
    }
}
export default ItemCard