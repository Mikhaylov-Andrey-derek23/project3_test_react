import React from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';
import Goods_card from './Goods_card';
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
            <div>
                <Goods_card tagName={this.state.name}/>
            </div>
        )
    }
}
export default Catolog;

