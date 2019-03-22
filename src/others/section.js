import React,{Component} from 'react';


export default class Section extends Component{
    constructor(props){
        super(props);
        this.state = {
            a: 1
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.alert}>child-btn</button>
            </div>
        )
    }
    componentDidMount(){
        this.props.onRef(this);
    }
    alertFromChild(){
        alert('alertFromChild');
    }
    alert = () => {
        this.props.alertP();
    }

}
