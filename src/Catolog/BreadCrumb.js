import React from 'react';
import {Link} from 'react-router-dom';
const nameLink =  {women: 'Женщины', men : 'Мужчины', childer : "Дети", new:'Новинки'};

class BreadCrumb extends React.Component{
    

    render(){
        return(
            <div className="breadCrumb">
                <Link to ="/">Главная</Link>/<Link to={this.props.link}>{this.props.name}</Link>
            </div>
        )
    }
}

export default BreadCrumb