import React, { Component } from 'react'

import loading from './laoding.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loading} alt='Prepairing your News....'  />                
             
            </div>
        )
    }
            
            

}

export default Spinner
