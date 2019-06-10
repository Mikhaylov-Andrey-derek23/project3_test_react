import React from 'react';
import {BrowserRouter, Router, Link}  from  'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div className="Navigation">
                <div className="nav">
                    <Link className="logo" to="/">sh</Link>
                    <Link to="/catolog/women">Женщинам</Link>
                    <Link to="/catolog/men">Мужчинам</Link> 
                    <Link to="/catolog/childer">Детям</Link> 
                    <Link to="/catolog/new">Новинки</Link>  
                    <Link to="/">О нас</Link>
                </div> 
                {/* <Basket name="Слава" count="5"/> */}
            </div>
        )
    }
} 

export default Header;