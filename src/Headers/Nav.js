import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
                    <Link className="logo" to="/">sh</Link>
                    <Link to="/catolog/women">Женщинам</Link>
                    <Link to="/catolog/men">Мужчинам</Link> 
                    <Link to="/catolog/children">Детям</Link> 
                    <Link to="/catolog/new">Новинки</Link>  
                    <Link to="/">О нас</Link>
            </div> 
        )
    }
}
export default Nav