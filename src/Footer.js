import React from 'react';
import Catolog from './Footer/Catolog';
import About from './Footer/About';
import Social from './Footer/Social';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <Catolog/>
                <About/>
                <Social/>                
            </footer>
        )
    }
}

export default Footer