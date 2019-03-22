import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './clock';
import Counter from './test';

// class Clock extends Component(){
//     constructor(props){
//         super(props);
//         this.state = {
//             date: new Date()
//         };
//     }
//     render(){
//         return (
//             <div>time:{this.state.date.toLocaleTimeString()}</div>
//         );
//     }
// }

class MClock extends Component{
    render(){
        return(
            <div>
                <Clock/>
                <Clock/>
                <Clock/>
            </div>
            
        )
    }
}

// ReactDOM.render(<Counter/>, document.getElementById('root'));
// ReactDOM.render( < App / > , document.getElementById('root'));
// ReactDOM.render( < MClock / > , document.getElementById('root'));
ReactDOM.render( < Clock / > , document.getElementById('root'));