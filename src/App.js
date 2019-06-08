import React from 'react';
import {BrowserRouter, Router, Link}  from  'react-router-dom';
import Header from './Header';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        
    }
}

export default App