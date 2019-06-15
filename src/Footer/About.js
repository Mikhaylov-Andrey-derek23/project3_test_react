import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component{
    render(){
        return(
            <div className="about">
                <h2>магазин</h2>
                <Link to="/">О нас</Link>
                <Link to="/">Доставка</Link>
                <Link to="/">Работа с нами</Link>
                <Link to="/">Контакты</Link>
                
            </div>
        )
    }
}
export default About