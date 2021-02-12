import React from 'react';
import {View, Text, TouchableOpacity, Alert, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase'; 

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
          userName  : firebase.auth().currentUser.email,
          requestedThingsList : []
        }}

        
  requestedThingsList =()=>{
    this.requestRef = db.collection("requested_things")
    .onSnapshot((snapshot)=>{
      var requestedThingsList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        requestedBooksList : requestedThingsList
      });
    })
  }

  keyExtractor=(item, index)=> index.toString()

        renderItem=({item,i})=>{
            console.log(item.item_name);
            return(
                <ListItem
                key={i}
                title={item.item_name}
                subtitle={item.description}
                titleStyle={{color:'black', fontWeight:'bold'}}
                rightElement={
                    <TouchableOpacity>
                        <Text>Exchange</Text>
                    </TouchableOpacity>
                }
                bottomDivider
                />
            )
        }


    render(){
        return(
            <View>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.allRequests}
                renderItem={this.renderItem}
                />
               
               
            </View>
        );
    }
}