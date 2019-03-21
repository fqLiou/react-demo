import React, {Component} from 'react';


class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
         this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!')
           clearInterval(this.timerId)
    }

    tick () {
        this.setState({
            date: new Date()
        })
    }
    
    render(){
        return(
            <div>time:{this.state.date.toLocaleTimeString()}</div>
        );
    }
}


// ReactDOM.render( <Clock /> , document.getElementById('root'));
export default Clock;