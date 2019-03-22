import React, { Component } from 'react';
import Section from '../others/section';

class Body extends Component {
    render() {
        return (
            <div>
                <h2> Its body </h2>
                <Section alertP={this.alertFromParent} onRef={this.onRef}/>
                <button onClick={this.alertC}>parent-btn</button>
            </div>
        );
    }
    onRef = (self) => {
        this.child = self;
    }
    alertC = () => {
        this.child.alertFromChild();
        console.log('a-from-child:',this.child.state.a);
    }
    alertFromParent(){
        alert('alertFromParent');
    }
}

export default Body;