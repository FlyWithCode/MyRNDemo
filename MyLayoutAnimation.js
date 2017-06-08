/**
 * Created by syc on 17/3/28.
 */
import React ,{ Component } from 'react';
import { AppRegistry,LayoutAnimation,Text,TouchableHighlight,StyleSheet,View } from 'react-native';

export default class MyLayoutAnimation extends  Component {
    constructor(props){
        super(props);
        this.state = { w:100,h:100 }
    }
    componentWillMount(){
        LayoutAnimation.spring();//创建动画
    }

    _onPress(){
        //让视图尺寸以动画形式变化
        LayoutAnimation.spring();
        this.setState({ w:this.state.w + 10,h: this.state.h + 10});
    }
    _onPressDel(){
        //让视图尺寸以动画形式变化
        LayoutAnimation.spring();
        this.setState({ w:this.state.w - 10,h: this.state.h - 10});
    }
    render() {
        return(

            <View style={styles.container}>
                <View style={[ styles.box ,{height: this.state.w, width: this.state.h,} ]}>
                    <TouchableHighlight onPress = {this._onPress.bind(this)}>
                        <View style={styles.button}>
                        <Text style={styles.buttonText}> {this.props.text} 我</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress = {this._onPressDel.bind(this)}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>{this.props.text}你</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>




        );
    }

}

 const styles = StyleSheet.create({
     container:{
     flex:0,
     justifyContent:'center',
     alignItems: 'center',
     backgroundColor: 'gray',
         height:300,
 },
     box:{
     backgroundColor: 'red',

 },
     button:{
         justifyContent:'center',
         alignItems: 'flex-start',
         backgroundColor: 'white',
         borderWidth:5,
     },
     buttonText:{
         fontSize:20,
         color: 'black'
     },

 });