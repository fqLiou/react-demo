import React, { Component } from 'react';
import {Header, A} from './header';
import Body from './body';
import Footer from './footer';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // 初始化阶段
    // 组件即将被装载、渲染到页面上
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    // 组件真正在被装载之后[AJAX请求]
    componentDidMount() {
         console.log('Component DID MOUNT!')
    }

    // 运行中状态
    // 组件将要接收到属性的时候调用
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    // 组件接受到新属性或者新状态的时候（可以返回false，接收数据后不更新，阻止render调用，后面的函数不会被继续执行了）
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    // 组件即将更新不能修改属性和状态
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    // 组件重新描绘
    render() {
        return (
            <div>
                <Header name="header,hha"/>
                <Body/>
                {A}
                <Footer name="footerrrrrrrrrrrrrrrrr"/>
            </div>            
        );
    }
    // 组件已经更新
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    // 销毁阶段
    // componentWillUnmount:组件即将销毁
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!')
    }
}

export default App;