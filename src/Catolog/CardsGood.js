import React from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';
import CardGood from './CardGood'


class CardsGood extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isload: false,
            data: [] 
        }
    }

    componentDidMount(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/data.json');
        xhr.send();
        xhr.addEventListener('load', ()=>{
            console.log('load');
            const respon = JSON.parse(xhr.responseText);
            this.setState({
                data : respon.data

            })
            console.log(this.state)
        })
    }

    render(){
        return(
            <div className="cardsGood">
                {
                    this.state.data.map((item, key) =>
                   <CardGood img={item.url_img} name={item.name} price={item.price} nameId={item.idName}/>
                 )
                }
            </div>
        )
    }
}
export default CardsGood