/**
 * Created by syc on 17/3/29.
 */
import React,{ Component } from 'react';
import {AppRegistry, Text,View,TouchableHighlight,Navigator,StyleSheet,NavigatorIOS} from 'react-native';
// import MyHome from './MyHome';
// import IosIndex from './iosIndex'
import Index from './home'
export default class MyEntrence extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const {props} = this
        return (
            <Navigator  initialRoute={{ title:'Index',component:Index}}
                        renderScene={(route,navigator) => {
                            let RoutComponent = route.component;
                            return <View style={styles.container}>
                                <TouchableHighlight onPress={ () => {navigator.pop()}} underlayColor='gray'>
                                    <Text style={styles.back}>back</Text>
                                </TouchableHighlight>
                                <RoutComponent {...route.params} { ...props}  navigator = { navigator} />
                            </View>
                        }}
            />

            // <NavigatorIOS initialRoute={ {title:'Index',component:Index,backButtonTitle:'back'} }/>





        );
    }


}

 const styles = StyleSheet.create({
        container:{
          flex:0,
            justifyContent:'flex-start',
            height:400,
            backgroundColor:'gray',
            top:64,

        },
     back:{
         flex:0,
         justifyContent:'flex-start',
         height:30,
         width:100,
         color:'red',
         fontSize:20,
         backgroundColor:'blue',
         top:-40,
         left:10
     }
 })