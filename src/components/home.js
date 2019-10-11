import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import firebase from './../Config/firebase'
import {TabNav} from './../Navigation/navigation'

export default class Home extends React.Component{

    logOut =() =>{
        firebase.auth().signOut()
        .then((res)=>{
            console.log(res)
            this.props.navigation.navigate("FacebookLogin");
        })
        .catch((error)=>{
            alert(error)
        })
    }

    static navigationOptions = ({ navigation }) => {

        return {
      
            headerTitle:(<View style={{display:"flex",flexDirection:"row"}}>
                <Image style={{width: 50, height: 50,borderRadius:50}}source={{uri: navigation.getParam('photoURL')}}/>
                <View style={{width:270,paddingLeft:10,paddingTop:10}}>
                <Text style={{fontSize:20}}>
                {
                    navigation.getParam('name')
                }
            
                </Text>
                </View>
                <TouchableOpacity
        
         onPress={ navigation.getParam('logout')}
       >
                <Image style={{width: 30, height: 30,marginTop:10}}source={{uri: 'https://icon-library.net/images/logout-icon-transparent/logout-icon-transparent-7.jpg'}}/>
         
       </TouchableOpacity>
                </View>)

        }
    }


    componentDidMount=()=>{
        firebase.auth().onAuthStateChanged((user) =>{
            if (user) {
                console.log("========================home",user)
                this.props.navigation.setParams({name:user.displayName,
                    photoURL:user.photoURL
                })
            } else {
                // this.props.navigation.navigate("FacebookLogin")
                console.log("logged out")

            }
          });
          this.props.navigation.setParams({logout:this.logOut})
    }

    
  
  
    render(){
        return(

    <TabNav path={this.props.navigation}/>

        )
    }
}



