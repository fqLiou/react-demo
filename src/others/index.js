import React, {Component} from 'react';
class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            timerId: null,
            value: '2'
        }
    }
    componentDidMount(){
        this.setState({
            timerId: this.props.timerId
        });
        this.props.onRef(this);
    }
    render(){
        return(
            <div>
                <button onClick={this.startClock.bind(this)}>子组件的start</button>
                <button onClick={this.stopClock.bind(this)}>子组件的stop</button>
                <p>timerId:{this.props.timerId}</p>                
                <p onClick={this.changeValue.bind(this)}>value:{this.state.value}</p>
            </div>
        );
    }
    startClock() {
        console.log('child-tick');
        // this.props.tickFromParent();
    }
    stopClock = () => {
        console.log('child-stop');
        // this.props.clearFromParent();
    }
    changeValue(){
        this.setState({
            value: 'fqLiou'
        })
    }
    chris(){
        this.setState({
            value: 'chris'
        })
    }
}
export default Button;