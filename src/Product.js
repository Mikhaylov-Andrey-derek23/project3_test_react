import React from 'react';
import BreadCrumb from './Product/BreadCrumb';
import ItemCard from './Product/ItemCard';

const nameLink =  {women: 'Женщины', men : 'Мужчины', children : "Дети", new:'Новинки'}

class Product extends React.Component{
    constructor (props){
        super(props);
        this.state  ={
            size : [1]

        }
    }
    componentDidMount(){
        fetch('/api/data.json').then(data=>{
            return data.json()
        }).then(respon=>{
            respon.data.forEach(el=>{
                if(el.idName == this.props.match.params.name){
                    console.log(el)
                    this.setState(this.state = el)
                }
            })
        })
        console.log(this.state)
        // {catolog: "men", id: 5, idName: "sneakers_gray", url_img: "https://static.dochkisinochki.ru/upload/img_loader/40/28/84/GL000479531mGS6545_001.jpg", 
        // name: "Кеды серые", …}
    }

    render(){
        return(
            <div className="product">
                <BreadCrumb parentName={nameLink[this.state.catolog]} link={'/product/'+this.props.match.params.name} parentLink={'/catolog/'+this.state.catolog} name={this.state.name}/>
                <ItemCard img={this.state.url_img} id={this.state.id} price={this.state.price} decription={this.state.decription} size={this.state.size} linkBasket={'/basket/'+this.state.id} name={this.state.name}/>
            </div>
        )
    }
}

export default Product;