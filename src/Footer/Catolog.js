import React from 'react';
import {Link} from 'react-router-dom';

class Catolog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            women : 0,
            men : 0,
            children : 0,
            new : 0
        }
    }
    componentDidMount(){
        fetch('api/data.json').then(data=>{
            return data.json()
        }).then(respon=>{
            respon.data.forEach(val => {
                if(val.catolog == 'women'){
                    const womenLength = this.state.women +1;
                    this.setState({
                        women : womenLength
                    })
                }
                if(val.catolog == 'men'){
                    const menLength = this.state.men +1;
                    this.setState({
                        men : menLength
                    })
                }
                if(val.catolog == 'children'){
                    const childrenLength = this.state.children +1;
                    this.setState({
                        children : childrenLength
                    })
                }
                if(val.catolog == 'new'){
                    const newLength = this.state.new +1;
                    this.setState({
                        new : newLength
                    })
                }
            })
    })
    }
    render(){
        return(
            <div className="catolog">
                <h2>Коллекция</h2>
                <Link to="/catolog/women">Женщинам ({this.state.women})</Link>
                <Link to="/catolog/men">Мужчинам ({this.state.men})</Link> 
                <Link to="/catolog/children">Детям ({this.state.children})</Link> 
                <Link to="/catolog/new">Новинки ({this.state.new})</Link>  
            </div>
        )
    }
}

export default Catolog 