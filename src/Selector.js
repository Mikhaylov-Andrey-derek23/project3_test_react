import React from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';


class Selector extends React.Component{

  

    render(){
        return(
            <div className="Selector">
                <form>
                    <select name="Categories">
                        <option value="basic">Категории</option>
                        <option value="Jacket">Куртки</option>
                        <option value="Sneake">Кеды</option>
                        <option value="Jeans">Джинсы</option>
                    </select>
                    <select name="Size">
                        <option value="basic">Размер</option>
                        <option value="big">Больщой</option>
                        <option valur="medium">Средий</option>
                        <option value="small">Малый</option>
                    </select>
                    <select name="Price" >
                        <option value="basic">Стоимость</option>
                        <option value="0-1000">0-1000 руб.</option>
                        <option value="1000-3000">1000-3000 руб.</option>
                        <option value="3000-6000">3000-6000 руб.</option>
                        <option value="6000-9000">6000-9000 руб.</option>
                    </select>
                </form>      
            </div>
        )
    }
}

export default Selector