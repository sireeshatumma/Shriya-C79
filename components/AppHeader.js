import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default class AppHeader extends React.Component {
    render(){
        return(
            <View>
                <Text style={styles.AppHeader}>Barter System </Text>
                <Text style={styles.Tagline}>Exchange Things </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    AppHeader:{
        fontSize:40,
        fontFamily:'serif',
        borderWidth:3,
       backgroundColor:'#fff',
       borderRadius:20,
       padding:10,
       margin:10
        
    },
    Tagline:{
        fontFamily:'serif',
        alignSelf:'flex-end'
    }
})