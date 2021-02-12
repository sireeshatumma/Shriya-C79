import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase'; 

export default class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userName : firebase.auth().currentUser.email,
            itemName:'',
            description:''
        }
    }

    addItem=(itemName, description)=>{
        var userName = this.state.userName
        db.collection("exchange_requests").add({
            "user_name": userName,
            "item_name":itemName,
            "description":description
        })
        this.setState({
            itemName:'',
            description:''
        })

        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text:'OK', onPress:()=>{
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        );
    }

    render(){
        return(
            <View>
                <TextInput placeholder="Item"/>
                <TextInput  placeholder="Description"/>

                <TouchableOpacity onPress={()=>{
                    this.addItem(this.state.itemName, this.state.description)
                }}>
                <Text>Add Item</Text>
                </TouchableOpacity>

            </View>
        )
    }
}