import React from 'react';
import {BrowserRouter, Router, Link}  from  'react-router-dom';

class Main extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <section className="headerMain">
                    <h1>новые поступление лета</h1>
                    <h3>Мы подготовили для Вас лучшие новинки сезона</h3>
                    <Link to="catalog/new">Посмотреть новинки</Link>
                </section>  
                <section className="advertisingLink">
                    <div className="advertisingLinkDiv">
                        <Link className="jeansJacket" to="catolog/12">
                            <div>
                                <p>джинсовые куртки</p>
                                <p>New Arrival</p>
                            </div>
                            
                        </Link>
                        <Link className="accessories" to="catolog/accessories"></Link> 
                    </div>

                    <div className="advertisingLinkDiv">
                        <Link className="jeansJacket" to="catolog/12">
                            <div>
                                <p>джинсовые куртки</p>
                                <p>New Arrival</p>
                            </div>
                            
                        </Link>
                        <Link className="accessories" to="catolog/accessories"></Link>
                    </div>
                    <div className="advertisingLinkDiv">
                        <Link className="jeansJacket" to="catolog/12">
                            <div>
                                <p>джинсовые куртки</p>
                                <p>New Arrival</p>
                            </div>
                            
                        </Link>
                        <Link className="accessories" to="catolog/accessories"></Link>
                    </div>
                    <div className="advertisingLinkDiv">
                        <Link className="jeansJacket" to="catolog/12">
                            <div>
                                <p>джинсовые куртки</p>
                                <p>New Arrival</p>
                            </div>
                            
                        </Link>
                        <Link className="accessories" to="catolog/accessories"></Link>
                    </div>

                    
                </section>
                
                           
            </div>
        )
    }
}
export default Main