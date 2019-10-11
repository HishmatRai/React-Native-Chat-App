import React, { Component } from 'react';
import { CardItem, Text, Icon, Right ,Button} from 'native-base';
import * as Facebook from 'expo-facebook';
import firebase from './../Config/firebase'
export default class CardListExample extends Component {

    // static navigationOptions={
    //     header:null
    // }



    componentDidMount(){
        var that = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                that.props.navigation.navigate("MainScreen")
                console.log("data",user)
            } else {
                // this.props.navigation.navigate("FacebookLogin")
                console.log("logged out")

            }
          });
    }

    loginWithFacebook = async()=> {
        try {
            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync('2570926566468703');
            if (type === 'success' && token) {
                var credential = await firebase.auth.FacebookAuthProvider.credential(token);
                await firebase.auth().signInAndRetrieveDataWithCredential(credential)
                    .then((result) => {
                        let Users={
                            userName:result.user.displayName,
                            userImage:result.user.photoURL,
                            userId:result.user.uid,
                            userEmail:result.user.email

                        }



                      


                                    firebase.firestore().collection("allUsers").doc(result.user.uid).set(Users)
                                    .then((res)=>{
                                        console.log("=============================>",res)
                                        this.props.navigation.navigate("MainScreen")
                                    })
                                    .catch((error)=>{
                                        console.log("======================================>error",error)
                                    })
                                
                            
                        
                        .catch((error)=>{
                            console.log("====================================================>error",error)
                        })



                        
                    })
                    .catch((err) => {
                        console.log('Error==>', err)
                    })
    
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            console.log(`Facebook Login Error: ${message}`);
        }
    }
  render() {
    return (
<Button onPress={()=>this.loginWithFacebook(this.props)} style={{width:"30%",alignItems: 'center', justifyContent: 'center'}}>
            <CardItem >
              <Icon active name="logo-facebook" />
              <Text>facebook</Text>
             </CardItem>
             </Button>
    );
  }
}