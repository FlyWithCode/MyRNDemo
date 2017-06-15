/**
 * Created by syc on 2017/6/8.
 */
import  React ,{ Component } from 'react';
import { AppRegistry,View, TouchableHighlight, Text , ScrollView , StyleSheet,Image  } from 'react-native';

//获取屏幕宽度
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;

//本地图片
var  imageData = [
    require('./images/jessicajung.png'),
    require('./images/kimhyoyeon.png'),
    require('./images/seohyun.png'),
    require('./images/sooyoung.png'),
    require('./images/sunny.png'),
    require('./images/taeyeon.png'),
    require('./images/tiffany.png'),
    require('./images/total_girls.png'),
    require('./images/yoona.png'),
    require('./images/yuri.png')

];

//网络图片
// var imageData = [
//     'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2263582212.jpg',
//     'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2265761240.jpg',
//     'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2266110047.jpg'
// ];

export default class Scroller extends Component {
    constructor(props){
        super(props);
        // var TimerMixin = require('react-timer-mixin');
        // mixins: [TimerMixin]

        this.state = {
            currentPage:0
        }
    }



    renderImages(){
        let allImages = [];
        for ( let i = 0 ; i < imageData.length ; i ++ ){
            let item = imageData[ i ];
            console.log(item);
            //加载网络图片
            // allImages.push(<Image key ={i} source={{uri:item}} style={stylee.imageStyle} />)
            //加载本地图片
            allImages.push(<Image key={i}  source={item} style={stylee.imageStyle} />)
        }
        return allImages;
    }
    onAnimationEnd(e){
        let offsetX = e.nativeEvent.contentOffset.x;
        let pageIndex = Math.floor(offsetX / ScreenWidth );
        this.setState ({currentPage:pageIndex });
        console.log(offsetX.toString());
    }

    renderPaingIndicator(){
        let  pagingIndArray = [];
        let style;
        for (let i = 0; i < imageData.length; i ++ ){
            style = (i == this.state.currentPage ? {color:'green'} : {color:'white'} );
            pagingIndArray.push(
                <Text key = {i} style={[{fontSize:30},style ]}>·</Text>
            ); }
        return pagingIndArray;
    }

    render(){
        return(
            <View style = { stylee.styleview }>
                <ScrollView style={stylee.container}
                            // contentContainerStyle={{paddingLeft:10,paddingTop:10,paddingRight:10}}
                            ref = 'scrollView'
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            pagingEnabled={true}
                            onScroll={() => { console.log('onScroll!'); }}
                            onMomentumScrollEnd={
                                (e) => { this.onAnimationEnd(e) }
                            }
                >
                    {this.renderImages()}

                </ScrollView>


                <View style={ stylee.pagingIndicationStyle}>
                    { this.renderPaingIndicator()}
                </View>

            </View>
        )

    }




}

const stylee = StyleSheet.create({
    container:{
        top:64,
        backgroundColor:'gray',

    },
    styleview:{
        backgroundColor:'#ffffff'
    },
    imageStyle:{
        width:ScreenWidth,
        height:200,
    },
    pagingIndicationStyle:{
        height:25,
        width:ScreenWidth,
        backgroundColor:'rgba(0,0,0,0.3)',
        position:'absolute',
        bottom:-65,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    }
})