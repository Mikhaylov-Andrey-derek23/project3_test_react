import React from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';
import Goods_card from './Catolog/Goods_card';
import Selector from './Catolog/Selector';
import CardsGood from './Catolog/CardsGood';
import BreadCrumb from './Catolog/BreadCrumb';
const nameLink =  {women: 'Женщины', men : 'Мужчины', childer : "Дети", new:'Новинки'}


class Catolog extends React.Component{
    constructor (props){
        super(props);
        this.state  ={
            name : nameLink[this.props.match.params.name]
        }

    }
    // componentDidMount(){
    //     this.setState({
    //        name : nameLink[this.props.match.params.name]
    //     })
    // }


    render(){
        return(
            <div className="goodsCard">
                <BreadCrumb name={this.state.name}/>
                <Selector/>
                <CardsGood/>
                {/* <Goods_card tagName={this.state.name}/> */}
                
            </div>
        )
    }
}
export default Catolog;

