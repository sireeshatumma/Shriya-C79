import  React, {Component} from 'react';
import { View , TouchableOpacity, StyleSheet, Text} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
        <View style={{ flex: 0.8}}>
        <DrawerNavigatorItems {...this.props}  />
      </View>
      <View  style={{flex:1}}>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={() => {
            this.props.navigation.navigate("Welcome");
            firebase.auth().signOut();
          }}
        >
        <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
      </View>
        )
    }
}


const styles = StyleSheet.create({
    logOutButton:{
        borderWidth:2,
        width:'50%',
        height:'10%',
        backgroundColor:'pink',
        alignSelf:'baseline',
        alignItems:'center',
        borderRadius:50,
        marginTop:350,
        padding:10

    },
    buttonText:{
        fontFamily:'serif',
        fontSize:20,
        alignSelf:'center'
    }
})