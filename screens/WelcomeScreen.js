import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    Alert,
    TouchableOpacity,
    ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import AppHeader from '../components/AppHeader';

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            firstName:'',
            lastName:'',
            address:'',
            address:'',
            contact:'',
            confirmPassword:'',
            isModalVisible:'false'
        }
    }

    userSignUp=(emailId, password, confirmPassword)=>{
        if(password!== confirmPassword){
            return Alert.alert("password doesn't match \n Check Again")
        }else{
            firebase.auth().createUserWithEmailAndPassword(emailId,password)
            .then(()=>{
                db.collection('users').add({

                     first_name:this.state.firstName,
                     last_name:this.state.lastName,
                     contact:this.state.contact,
                     email_id:this.state.emailId,
                     address:this.state.address
                })
            
       return  Alert.alert(
        'User Added Successfully',
        '',
        [
           //  doubt
          {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
        ]
    );
            })
            .catch((error)=>{
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            });
        }
    }

    userLogin=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
         this.props.navigation.navigate('DonateScreen')
           
        })
        .catch((error)=>{
            var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
        })
    }

    modal=()=>{
        return(
            <Modal animationType="fade"
            transparent={true}
            visible={this.state.isModalVisible}>
                <View style={styles.modalContainer}>
                    <ScrollView  style={{width:'100%'}}>
                        <KeyboardAvoidingView style={{width:'100%'}}>
                            <Text style={styles.modalHeading}>Registration</Text>

                            <TextInput
                             placeholder={"First Name"}
                             maxLength={8}
                             style={styles.modalInputs}
                             onChangeText={(text)=>{
                                 this.setState({
                                     firstName:text
                                 })
                             }}/>

                            <TextInput  placeholder={"Last Name"}
                             maxLength={8}
                             style={styles.modalInputs}
                             onChangeText={(text)=>{
                                 this.setState({
                                     lastName:text
                                 })
                             }}/>
                            <TextInput  placeholder={"Contact"}
                             maxLength={15}
                             style={styles.modalInputs}
                             keyboardType={'numeric'}
                             onChangeText={(text)=>{
                                 this.setState({
                                     contact:text
                                 })
                             }}/>
                            <TextInput  placeholder={"Address"}
                            multiline={true}
                            style={styles.modalInputs}
                             onChangeText={(text)=>{
                                 this.setState({
                                    address:text
                                 })
                             }}/>
                            <TextInput placeholder={"Email-Id"}
                             keyboardType={'email-address'}
                             style={styles.modalInputs}
                             onChangeText={(text)=>{
                                 this.setState({
                                     emailId:text
                                 })
                             }}/>
                            <TextInput placeholder={"Password"}
                            style={styles.modalInputs}
                             secureTextEntry={true}
                             onChangeText={(text)=>{
                                 this.setState({
                                     password:text
                                 })
                             }}/>
                            <TextInput placeholder={"Confirm Password"}
                            style={styles.modalInputs}
                             secureTextEntry={true}
                             onChangeText={(text)=>{
                                 this.setState({
                                     confirmPassword:text
                                 })
                             }}/>

                             <View>
                             <TouchableOpacity style={styles.modalButton} onPress={()=>{this.setState({"isModalVisible":false})}} >
                                     <Text style={styles.modalButtonText}>Cancel</Text>
                                 </TouchableOpacity>
                                 
                                 <TouchableOpacity  onPress={()=>{
                                         this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)
                                     }} style={styles.modalButton}>
                                    

                                     <Text style={styles.modalButtonText}>
                                         Register
                                     </Text>
                                 </TouchableOpacity>
                             </View>
                             <View>
                                
                             </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>

            </Modal>
        );
    }

    render(){
return(
 <View style={styles.screenContainer}>
     <AppHeader/>
     <Text style={styles.heading}>Welcome!</Text>

     <View>
         {this.modal()}
     </View>

     <View>

     <TextInput style={styles.screenInputs} placeholder="Email ID " keyboardType="email-address"/>
     <TextInput style={styles.screenInputs} placeholder="password" secureTextEntry={true}/>
        <TouchableOpacity onPress={ this.userLogin(this.state.emailId, this.state.password)} style={styles.screenButton}>
            <Text style={styles.screenButtonText}>
                Log in
            </Text>
        </TouchableOpacity>

          
        <TouchableOpacity
           style={styles.button}
           onPress={()=>this.setState({ isModalVisible:true})}
           style={styles.screenButton}
           >
           <Text style={styles.screenButtonText}>SignUp</Text>
         </TouchableOpacity>

            </View>
</View>)
    }
}

const styles = StyleSheet.create({
    screenContainer:{flex:1,
                    alignItems: 'center',
                     justifyContent: 'space-evenly',
                    alignContent:'center',
                backgroundColor:'#F0C4C0'},
    heading:{fontSize:25,
            fontWeight:'300',
          fontFamily:'serif',
        color:'#302515'},
    screenButton:{
        backgroundColor:'#DC5874',
        borderWidth:2,
        borderRadius:15,
        width:"90%",
        height:70,
        margin:20,
        padding:20,
        borderColor:'#B51759'
    },
    screenButtonText:{
        fontSize:15,
        fontFamily:'serif',
        alignSelf:'center'
    },
    screenInputs:{
        borderWidth:3,
        margin:20,
        width:300,
        height:60,
        borderRadius:20,
        padding:20,
        backgroundColor:'#B51759',
        color:'white',
        borderColor:'#DC5874'
    },

    modalContainer:{
        flex:1,
        justifyContent:'space-evenly',
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:'white',
        width:'100%',
        backgroundColor:'#DC5874'
    },
    modalHeading:{
        fontSize:40,
        alignSelf:'center',
        color:'#fff'
    },
    modalInputs:{
        margin:20,
        padding:10,
        borderWidth:2,
        backgroundColor:'#F0C4C0',
        borderRadius:20
    },
    modalButton:{
        borderWidth:2,
        width:'30%',
        height:'15%',
        padding:15,
        justifyContent:'center',
        backgroundColor:'#B51759',
        alignSelf:'center',
        margin:5,
        borderRadius:20
    },
    modalButtonText:{
        fontFamily:13,
        fontFamily:'serif',
        color:'white'
    }
})