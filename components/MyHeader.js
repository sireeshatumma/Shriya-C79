import React , {Component} from 'react';
import {Header} from 'react-native-elements';
import {View,Text} from 'react-native';


export default class MyHeader extends Component{
    render(){
        return(
            <Header
            placement="left"
            centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
            backgroundColor = "#eaf8fe"

            />
        )
    }
}