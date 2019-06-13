import React from 'react';
import {Link} from 'react-router-dom';

class AdvertisingLink extends React.Component{
    render(){
        return(
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
                        <div className="infoBlok">
                            <div className="container">
                                <div className="logo"></div>
                                <p>каждый сезон мы подготавливаем для Вас исключительно лучшую модну одежду. Следит за нашими новинками</p>
                            </div>
                        </div>
                        <Link className="jeans" to="catolog/jeans">
                            <div>
                                <p className="description">джинсы</p>
                                <p className="price">от 3200 руб.</p>
                            </div>
                        </Link>
                        <div className="pointerLink">
                            <p>Аксессуары</p>
                        </div>
                    </div>
                    <div className="advertisingLinkDiv">
                        <Link className="shoots" to="catolog/shoots"></Link>
                        <div className="infoBlok">
                            <div className="container">
                                <div className="logo"></div>
                                <p>Самые низкие цены в Москве. Нашли дешевле? Вернем разницу.</p>
                            </div>
                        </div>
                        <Link className="sportClothes" to="catolog/sportClothes">
                                <p className="description">Спортивная<br/> одежда</p>
                                <p className="price">от 590 руб.</p>
                        </Link>

                    </div>
                    <div className="advertisingLinkDiv">
                        <div className="pointerLink2">
                            <p>Элегантная<br/> обувь <br/><span>ботинки, кросовки</span></p>
                        </div>
                        <Link className="children" to="catolog/childer">
                            <div>
                                <p>Детская<br/>одежда</p>
                                <p>New Arrival</p>
                            </div>
                            
                        </Link>
                    </div>
                    
            </section>
        )
    }
}
export default AdvertisingLink