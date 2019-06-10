import React from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';
import Goods_card from './Goods_card';

class Catolog extends React.Component{
    constructor (props){
        super(props);
        this.state  ={
            name : 56
        }

    }
    componentDidMount(){
        const nameLink =  {women: 'Женщины', men : 'Мужчины', children : "Дети", new:'Новинки'}
        this.setState({
           name : nameLink[this.props.match.params.name]
        })
    }


    render(){
        return(
            <div className="wrapper">
e
                <Goods_card tagName={this.state.name}/>
            </div>
        )
    }
}
export default Catolog;

