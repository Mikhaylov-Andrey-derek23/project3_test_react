import React from 'react';
import {BrowserRouter, Router, Link}  from  'react-router-dom';
import HeaderMain from './Main/HeaderMain';
import AdvertisingLink from './Main/AdvertisingLink'

class Main extends React.Component{
    render(){
        return(
            <div>
                <HeaderMain/>
                <AdvertisingLink/>               
                           
            </div>
        )
    }
}
export default Main