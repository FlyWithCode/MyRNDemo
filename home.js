import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight,NavigatorIOS } from 'react-native';

// import Init from './index-init';
// import Ref from './index-ref';
// import Props from './index-props';
// import State from './index-state';
// import LifeCycle from './index-lifecycle';
// import Image from './index-image';
// import Flexbox from './index-flexbox';
// import Data from './index-shuangxiangbangding';
// import Fetch from './index-fetch';
// import NavigatorDemo from './index-navigator';
// import LayoutAnimation from './index-layoutAnimation';
// import Animated from './index-animated';

import MyAnimation from './MyAnimation';
import MyLayoutAnimation from './MyLayoutAnimation';
import MyDoubleBind from './MyDoubleBind';
import MyFeact from './MyFeact';

class Index extends Component {
  onPress(route) {
    const { navigator } = this.props;
    //为什么这里可以取得 props.navigator?请看上文:
    //<Component {...route.params} navigator={navigator} />
    //这里传递了navigator作为props
    if(navigator) {
      navigator.push(route)
    }
  }

  render() {
    const routes = [{
      title: "MyAnimation",
      index: 0,
      component: MyAnimation
    }, {
      title: "MyLayoutAnimation",
      index: 1,
      component: MyLayoutAnimation
    }, {
      title: "MyDoubleBind",
      index: 2,
      component: MyDoubleBind
    }, {
      title: "MyFeact",
      index: 3,
      component: MyFeact }
    // }, {
    //   title: "LifeCycle",
    //   index: 1,
    //   component: LifeCycle
    // }, {
    //   title: "Image",
    //   index: 1,
    //   component: Image
    // }, {
    //   title: "Style",
    //   index: 1,
    //   component: Init
    // }, {
    //   title: "Flexbox",
    //   index: 1,
    //   component: Flexbox
    // }, {
    //   title: "Event",
    //   index: 1,
    //   component: State
    // }, {
    //   title: "Data",
    //   index: 1,
    //   component: Data
    // }, {
    //   title: "Fetch",
    //   index: 1,
    //   component: Fetch
    // }, /*{
    //   title: "Navigator",
    //   index: 1,
    //   component: NavigatorDemo
    // }, */{
    //   title: "LayoutAnimation",
    //   index: 1,
    //   component: LayoutAnimation
    // }, {
    //   title: "Animated",
    //   index: 1,
    //   component: Animated
    // }
        ]
    console.log(routes)
    return (
      <View>
      {
        routes.map((route, index) => {
          console.log(route)
          return <TouchableHighlight key={index} onPress={this.onPress.bind(this, route)}>
            <Text style={ {fontSize:40 }}>{route.title}</Text>
          </TouchableHighlight>
        })
      }
      </View>
    )
  }
}

export default Index
