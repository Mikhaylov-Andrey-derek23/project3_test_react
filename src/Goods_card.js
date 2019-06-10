import React from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';

import Selector from './Selector';
class Goods_card extends React.Component{
    render(){
        return(
            <div className="goodsCard">
                <div className="tag">
                    <a href="#">Главная </a><span>/</span><a href="#">{this.props.tagName}</a>
                </div>
                <h1>{this.props.tagName}</h1>
                <p>Все товары</p>
                <Selector/>
                {/* <CardsGood/> */}
            </div>
        )
    }
}
export default Goods_card