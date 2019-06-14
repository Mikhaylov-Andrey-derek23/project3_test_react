import React from 'react';
import HeaderMain from './Main/HeaderMain';
import AdvertisingLink from './Main/AdvertisingLink'
import FormEmail from './Main/FormEmail'

class Main extends React.Component{
    render(){
        return(
            <div>
                <HeaderMain/>
                <AdvertisingLink/>
                <FormEmail/>            
                        
            </div>
        )
    }
}
export default Main