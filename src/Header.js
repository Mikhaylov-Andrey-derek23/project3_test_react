import React from 'react';
import {BrowserRouter, Router, Link}  from  'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div className="Navigation">
                <div className="nav">
                    <Link className="logo" to="/">sh</Link>
                    <Link to="/women">Женщинам</Link>
                    <Link to="/men">Мужчинам</Link> 
                    <Link to="/childer">Детям</Link> 
                    <Link to="/new">Новинки</Link>  
                    <Link to="/about">О нас</Link>
                </div> 
                {/* <Basket name="Слава" count="5"/> */}
            </div>
        )
    }
} 

export default Header;