/**
 * Created by syc on 17/3/28.
 */
import React, { Component } from 'react';
import {View,StyleSheet,AppRegistry,Navigator,Text,TouchableOpacity,Animated,Easing } from 'react-native';
export default class MyAnimation extends Component{
    constructor(props){
        super(props);
        this.state = { bounceValue: new Animated.Value(0) };
    }

    componentDidMount(){
        this.state.bounceValue.setValue(1.5);
         Animated.spring(this.state.bounceValue,{toValue:0.5,friction:1,}).start();
        //  Animated.decay(this.state.bounceValue,{toValue:0.5}).start();
        //   Animated.timing(this.state.bounceValue,{toValue:0.5,duration:2500,easing:Easing.Linking}).start();
    }

    render(){
        return(<Animated.View style={{backgroundColor: 'green',
            width:100,
            height:100,
            transform:[{scale:this.state.bounceValue}],}} />);
    }
 }



    const animationStyles = StyleSheet.create({
        container : {
          backgroundColor: 'green',
            width:100,
            height:100,
        },
    });

