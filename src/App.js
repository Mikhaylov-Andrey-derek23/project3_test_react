import React from 'react';
import {BrowserRouter, Route, Link}  from  'react-router-dom';
import Header from './Header';
import Main from './Main';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Route exact path='/' component={Main}/>
                
            
            </BrowserRouter>
        )
        
    }
}

export default App