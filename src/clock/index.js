import React, {Component} from 'react';
import Button from '../others';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            timerId: null            
        };
    }

    componentWillMount() {
        // console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        //  console.log('Component DID MOUNT!')
        this.tickFn();
        console.log('this.timerId',this.timerId);
    }
    componentWillReceiveProps(newProps) {
        //   console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
        //   console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        //   console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        //    console.log('Component WILL UNMOUNT!')
    }

    tickFn () {
        this.timerId = setInterval(
            () => {
                this.setState({
                    date: new Date(),
                    timerId: this.timerId
                })
            },
            1000
        )
        
    }
    clear() {
        console.log(this)
        clearInterval(this.state.timerId);
    }
    onRef = (ref) => {
        this.child = ref;
        console.log('ref', ref);
    }
    getFnFromChild = () => {
        this.changeValue();
    }
    alertFromChild = () => {
        this.child.chris();
    }
    render(){
        return(
            <div>
                <h2>time:{this.state.date.toLocaleTimeString()}</h2>
                <Button clearFromParent={this.clear} tickFromParent={this.tick} timerId={this.state.timerId} onRef={this.onRef} onClick={this.getFnFromChild.bind(this)}/>

                <button onClick={this.tickFn.bind(this)}>父组件的tick</button>
                <button onClick={this.clear.bind(this)}>父组件的stop</button>

                <button onClick={this.alertFromChild.bind(this)}>changeChildValue父组件调用子组件方法</button>
            </div>
        );
    }
}


// ReactDOM.render( <Clock /> , document.getElementById('root'));
export default Clock;