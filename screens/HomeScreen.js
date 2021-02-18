import React from 'react';
import {View, Text, TouchableOpacity, Alert, FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase'; 

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
          userName  : firebase.auth().currentUser.email,
          requestedThingsList : [],
        }
    this.requestRef=null
    }

        
  getRequestedThingsList=()=>{
    this.requestRef = db.collection("requested_things")
    .onSnapshot((snapshot)=>{
      var requestedThingsList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        requestedThinList : requestedThingsList
      });
    })
  }


  componentDidMount=()=>{
        this.getRequestedThingsList();
  }

  componentWillUnmount=()=>{
      this.requestRef();
  }

  

       

    render(){
        return(
            <View>
                <Text>Home</Text>
                <FlatList style={styles.list}
                keyExtractor={(item)=> item.request_id}
                data={this.state.requestedThingsList}
                renderItem={({item,i})=>{
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
                }}
        
                />
               
               
            </View>
        );
    }
}

const styles = StyleSheet.create({

    list:{
        color:'cyan',
        borderColor:'blue',
        borderWidth:2
    }
})