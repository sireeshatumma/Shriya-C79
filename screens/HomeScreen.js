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
      var requestedThingsList = []
      snapshot.forEach((doc) => {
        requestedThingsList.push(doc.data())
      })
      this.setState({requestedThingsList:requestedThingsList})
    })
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    console.log(item.item_name);
    return (
      <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.description}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#ffff'}}>Exchange</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  componentDidMount=()=>{
        this.getRequestedThingsList();
  }

  componentWillUnmount=()=>{
      this.requestRef();
  }

  

    
  render(){
    return(
      <View style={{flex:1}}>
         <Text
               style={{backgroundColor:'#DC5874',
                        color:'#fff',
                        fontFamily:'serif',
                        fontSize:30,
                        alignSelf:'center',
                        marginTop:100
                       }}
               >Home</Text>
       
        <View style={{flex:1}}>
          {
           
            this.state.requestedThingsList.length === 0
            ?(
              <View style={{flex:1, fontSize: 20, justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontSize: 20}}>List of all Barter</Text>
              </View>
            )
            :(
              <FlatList
              
                keyExtractor={this.keyExtractor}
                data={this.state.requestedThingsList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

   
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
})