import React from 'react';
import {Link} from 'react-router-dom';

class HeaderMain extends React.Component{
    render(){
        return(
            <section className="headerMain">
                    <h1>новые поступление лета</h1>
                    <h3>Мы подготовили для Вас лучшие новинки сезона</h3>
                    <Link to="/catolog/new">Посмотреть новинки</Link>
                </section>  
        )
    }
}
export default HeaderMain