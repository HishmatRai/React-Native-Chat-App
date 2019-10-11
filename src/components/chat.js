
import React from 'react'
import {View,Text,Image} from 'react-native'
import firebase from './../Config/firebase'
import Allusers from './alllusers'

export default class Chat extends React.Component{

    constructor(){
        super();
        this.state={
          users:[],
        }
    }


    componentDidMount(){
        let {users} = this.state

        firebase.auth().onAuthStateChanged((user) =>{
            if (user) {
             

                firebase.firestore().collection("allUsers").get()
                .then((data)=>{
                    data.forEach((getData)=>{
                        let usersData = getData.data();
                 if(usersData.userId !== user.uid){
                        users.push(usersData);
                            this.setState({
                                users:users
                            })
                        }
                    })
                })
                .catch((error)=>{
                    console.log("====================================================>error",error)
                })

            } else {
                // this.props.navigation.navigate("FacebookLogin")
                console.log("logged out")

            }
          });


    }

  
  
    render(){

        console.log("===============================================================>pathhhhhhhhhhhh",this.props)
    
        return(
<View>
   {
       this.state.users.map((val,i)=>{

           return(
       <Allusers userName={val.userName} userImage={val.userImage} path={this.props.navigation}/>
           )
       })

}

</View>
        )
    }
}





