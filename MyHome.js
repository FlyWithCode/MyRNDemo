/**
 * Created by syc on 17/3/29.
 */
import React, { Compoment } from 'react';
import {AppRegistry,Navigator,View,Text,TouchableHighlight } from  'react-native';
import MyAnimation from './MyAnimation';
import MyLayoutAnimation from './MyLayoutAnimation';
import MyDoubleBind from './MyDoubleBind';
import MyFeact from './MyFeact';
export default class MyHome extends Compoment {
    _onPress(route){
        const { navigator } = this.props
        if (navigator){
            navigator.push(route)
        }
    }

    render(){
        const routes = [{
            title:"MyAnimation",
            index:0,
            component:MyAnimation
        },{
            title:"MyLayoutAnimation",
            index:1,
            component:MyLayoutAnimation
        },{
            title:"MyDoubleBind",
            index:2,
            component:MyDoubleBind
        },{
            title:"MyFeact",
            index:3,
            component:MyFeact
        }]
        return(
         <View>
             { routes.map((route,index) => {
                 return <TouchableHighlight key={index} onPress = { this._onPress.bind(this,route)}>
                     <Text>{route.title}</Text>
                 </TouchableHighlight>
             }) }
         </View>
        );
    }

}