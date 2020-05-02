import React, { Component } from 'react';
import { render } from '@testing-library/react';

const Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: ''
        }
    }

    render(){
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' />
                </div>
            </form>
        )
    }
}

export default Form
