import React, { Component } from 'react';

const A = 3;
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (             
            <header> Im {this.props.name}! </header>
        )
    }
}

export {Header,A};