/**
 * Created by syc on 17/3/29.
 */
import React,{ Component } from  'react';
import  { AppRegistry,StyleSheet,View,Text,Alert } from 'react-native';


export  default class MyFeact extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies:[]
        }
    }


    //获取远端数据
    movieFromApi(){
        const self = this
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responsejson) => {
             console.log(responsejson)
                self.setState({movies: responsejson.movies})
            })
            .catch((error) => {Alert(error) })
    }

    componentDidMount(){
    this._root = this.refs.view
        this.movieFromApi()
        console.log(this.state.movies)
}

render(){
        return(
        <View style={styles.container} ref='view'>
            {this.state.movies.map((movie,index) => {
                return <Text style={styles.movie} key={index}>{movie.title}</Text>
            })}

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
    movie: {
        textAlign: 'center',
        margin: 10,
    }
});