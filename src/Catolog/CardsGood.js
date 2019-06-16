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
        const link = this.props.link;
        console.log(link)
        fetch('/api/data.json').then(data=>{
            return data.json()
        }).then(respon=>{
            // respon.data.forEach(el => {
            //     console.log(el)
            // });
            respon.data.forEach(el =>{
                if(el.catolog == link){
                    const app = this.state.data
                    app.push(el)
                    this.setState({
                        data : app
        
                    })
                }
            })
            
        })
     
    }

    render(){
        return(
            <div className="cardsGood">
                {
                    this.state.data.map((item, key) =>
                   <CardGood img={item.url_img} name={item.name} price={item.price} nameId={'/product/'+item.idName}/>
                 )
                }
            </div>
        )
    }
}
export default CardsGood