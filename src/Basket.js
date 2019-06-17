import React from 'react';

class Basket extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user : [],
            product: []
        }
    }
    componentDidMount(){
        fetch('/api/user.json').then(data=>{
            return data.json()
        }).then(respon=>{
            this.setState({
                user : respon
            })
            if(this.props.match.params.name != 'null'){
                let orders = this.state.user.orders;
            for(let i = 0; i<orders.length; i++){
                if(orders[i] == this.props.match.params.name){
                    orders.splice(i, 1)
                }
            }
           orders.push(parseInt(this.props.match.params.name))
           this.setState({
               user :{
                orders : orders
               }
           })
            }
            
        })
        fetch('/api/data.json').then(data=>{
            return data.json()
        }).then(respon=>{
            let res = [];
            respon.data.forEach(el=>{
                this.state.user.orders.forEach(val=>{
                    if(el.id == val){
                        res.push(el)
                    }
                })
            })
            this.setState({
                product : res
            })
        })

    }

    plus(a){
        const count = a.el.count+1;
        let product = this.state.product
        product.forEach(el=>{
            if(el.id == a.el.id){
                el.count = count;
            }
        })
        this.setState({
            product : product
        })
    }
    minus(a){
        if(a.el.count>1){
            const count = a.el.count-1;
            let product = this.state.product
            product.forEach(el=>{
                if(el.id == a.el.id){
                    el.count = count;
                }
            })
            this.setState({
                product : product
            })
        }
    }
    delet(a){
        let product = this.state.product;
        for(let i = 0; i<product.length; i++){
            if(product[i].id == a.el.id){
                product.splice(i, 1)
            }
        }
        this.setState({
            product : product
        })
    }

    render(){
        console.log(this.state)
        let price = 500;
        const product = this.state.product;
        product.forEach(el=>{
           price = price + (el.price * el.count)
        })

        return(
            <div className="basketUser">
                <h1>Ваша корзина</h1>
                <h2>Товары резервируются на ограниченное время</h2>
                <div className="table">
                    <div className="tr">
                        <div className="img">Фото</div>
                        <div className="name">Наиминование</div>
                        <div className="size">Размер</div>
                        <div className="count">Количество</div>
                        <div className="price">Стоимость</div>
                        <div className="delet">Удалить</div>
                    </div>
                    {this.state.product.length>0 ? this.state.product.map(el =>
                        <div className="tr">
                            <div className="img"><img src={el.url_img} width="70%"></img></div>
                            <div className="name"><p>{el.name}</p><p>Артикуль {el.id}</p></div>
                            <div className="size"><p>{el.size[0]}</p></div>
                            <div className="count">
                                <div className="countVal">{el.count}</div>
                                <div className="fun">
                                    <div className="plus" onClick={()=>{this.plus({el})}} >+</div>
                                    <div className="minus"onClick={()=>{this.minus({el})}}>-</div>
                                </div>
                            </div>
                            <div className="price"><p>{el.price * el.count} руб.</p></div>
                            <div className="delet" onClick={()=>{this.delet({el})}}>
                            <svg width="12px" height="12px">
                                <text kerning="auto" font-family="Myriad Pro" fill="rgb(0, 0, 0)" transform="matrix( 0.70710678118655, 0.70710678118655, -0.70710678118655, 0.70710678118655,-5.09238407647331, 6.17889801564024)" font-size="30px"><tspan font-size="30px" font-family="Lato" fill="#303030">&#43;</tspan></text>
                            </svg>
                            </div>
                        </div>
                    
                    ) : ''}
                </div>
                <div>
                    <h1>Оставшиеcя блоки мне влом делать но итоговая цена с доставкой равняется: {price} руб.</h1>
                </div>

            </div>
        )
    }
}
export default Basket