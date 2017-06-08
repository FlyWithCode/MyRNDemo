/**
 * Created by syc on 17/3/29.
 */
import React, { Component } from 'react';
import { AppRegistry,StyleSheet,TouchableHighlight,View,Text,TextInput } from 'react-native';
 export default class MyDoubleBind extends Component{
   constructor(props){
       super(props);
       this.state = {
           text:''
       }
   }
    componentWillMount(){
           console.log('componentWillMount')
    }
    componentDidMount(){
       console.log('huh_root'+ this._root)
         this._root = this.refs.view
        console.log('hahh_root'+ this._root)
    }


     componentWillReceiveProps(nextProps) {
         console.log('componentWillReceiveProps')
     }

     shouldComponentUpdate(nextProps, nextState) {
         console.log('shouldComponentUpdate')
         return true
     }

     componentWillUpdate() {
         console.log('componentWillUpdate')
     }

     componentDidUpdate() {
         console.log('componentDidUpdate')
     }

     componentWillUnmount() {
         console.log('componentWillUnmount')
     }

    onStartShouldSetResponder(e){
        console.log(e)
    }

    render(){
        return(
            <View style={styles.container} ref="view" onstartshouldsetresponder={this.onStartShouldSetResponder}>
                <TextInput style={{height:50,backgroundColor:'red',width:300}}
                           value={this.state.text}
                           placeholder="type here.."
                           onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding:10,borderWidth:5,borderRadius:5,top:10}}> value: {this.state.text} </Text>
                <TouchableHighlight onPress = { () => this.setState({text:''})} underlayColor={'green'}>
                    <Text style={{top:20,padding:10,borderWidth:5,borderRadius:5}}>Reset</Text>
                </TouchableHighlight>
            </View>
        );
    }


}

const  styles = StyleSheet.create({
   container:{
      flex:0,
       justifyContent:'center',
       alignItems:'flex-start',
       backgroundColor:'gray',
       height:400,
   } ,
});