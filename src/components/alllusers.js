import React, { Component } from 'react';
import {Image,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
export default class CardExample extends Component {
  render() {
    return (
      <TouchableOpacity
      onPress={()=>this.props.path.navigate("Message")}
    >
      

            <CardItem >
              <Body style={{display:"flex",flexDirection:"row"}} >
              <Image style={{width: 50, height: 50,borderRadius:50}}source={{uri: this.props.userImage}}/>
                <Text style={{color:"black",marginLeft:20,marginTop:15}}>

                {
                  
                  this.props.userName

                }
                </Text>
              </Body>
            </CardItem>
            </TouchableOpacity>
    
    );
  }
}


