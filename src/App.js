import React from 'react';
import {BrowserRouter, Route, Link}  from  'react-router-dom';
import Header from './Header';
import Main from './Main';
import Catolog from './Catolog';
import Footer from './Footer';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div className="wrapper">
                    <Header/>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/catolog/:name' component={Catolog}/>
                    <Footer/>
                </div>
                
            </BrowserRouter>
        )
        
    }
}

export default App