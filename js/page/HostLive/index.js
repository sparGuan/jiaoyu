
import React, { Component, useState } from 'react';
import { PermissionsAndroid, Platform, ScrollView, SafeAreaView,
  StyleSheet,
  View,
  Alert,
  Text,
  Dimensions
  } from 'react-native';
import { check, PERMISSIONS, request } from 'react-native-permissions';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
// import {
//   Modal,
// } from '@ant-design/react-native'
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';
// const WeChat = require('react-native-wechat');
const INJECTEDJAVASCRIPT = `
window.onresize = function(){
  let webHeight = document.body.scrollHeight;
  window.ReactNativeWebView.postMessage("H" + webHeight);
}
`
class HostLivePage extends Component {
  constructor(props) {
    super(props);
    //fix this.params = this.props.route.params;
    // this.params = this.props.route.params;
    // const { url='1111111111111' } = this.params;
    const { height } = Dimensions.get("window")
    this.webView = null
    this.state = {
      url: 'https://edu.pcmxj.com/hostLive',
      canGoBack: false,
      webHeight: height
    };
    // WeChat.registerApp('wx23b3a7d6285929f3');
    // this.backPress = () => ();
  }
  
  componentDidMount() {
    // this.backPress.componentDidMount();
    
    this.requestCameraPermission()
  }

  onMessage(msg) {
      if (msg.nativeEvent.data !== undefined && msg.nativeEvent.data !== null) {
          this.setState({
            webHeight: parseInt(msg.nativeEvent.data)
          })
      }
  }

  componentWillUnmount() {
    // this.backPress.componentWillUnmount();
  }

  onBackPress() {
    this.onBack();
    return true;
  }

  // 获取APP权限
  async requestCameraPermission () {
    try {    
        let permission;    
        if (Platform.OS === 'ios') {      
          permission = PERMISSIONS.IOS.CAMERA;    
        } else {      
          permission = PERMISSIONS.ANDROID.CAMERA;    
        }    
        const result = await check(permission);    
        if (result === 'granted') {      
          return true;    
        } else {      
          const permissionResult = await request(permission);      
          return permissionResult === 'granted';    
      }  
    } catch (error) {    
      console.log(error);    
      return false;  
    }
      //   if (Platform.OS === 'android') {
            
      //       // Request required permissions from Android
      //       const granted = await PermissionsAndroid.requestMultiple([
      //         PermissionsAndroid.PERMISSIONS.CAMERA,
      //         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      //       ]);
            
      //       if (granted['android.permission.CAMERA'] !=
      //       PermissionsAndroid.RESULTS.GRANTED) {
      //           Modal.alert('相机未授权', '请授权您的相机应用权限', [
      //             { text: '好的', onPress: () => {} },
      //           ])
      //       } else if (granted['android.permission.RECORD_AUDIO'] !=
      //       PermissionsAndroid.RESULTS.GRANTED) {
      //         Modal.alert('麦克风未授权', '请授权您的麦克风权限', [
      //           { text: '好的', onPress: () => {} },
      //         ])
      //       }           
      // }
  }

  onBack() {
   
  }

  shareToTimeline() {  
    // WeChat.isWXAppInstalled().then((isInstalled) => {    
    //   if (isInstalled) {      
    //     // WeChat.shareToTimeline({type: 'text',description: '分享文本内容',})
    //     WeChat.shareToSession({
    //       title:'微信好友测试链接',
    //       description: '分享自:江清清的技术专栏(www.lcode.org)',
    //       thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
    //       type: 'news',
    //       webpageUrl: 'http://www.lcode.org'
    //     })
    //     .catch((error) => { 

    //      });    
    //   } else {
    //           Modal.alert('提示', '没有安装微信', [
    //             { text: '好的', onPress: () => {} },
    //           ])  
    //       }  
    // });

  }

  onNavigationStateChange(navState) {
    
  }

  render() {
    return (
      <WebView
          ref={webView => this.webView = webView}
          mixedContentMode={'compatibility'}
          style={{width: '100%', height: '100%'}}
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled={true}
          allowFileAccess={true}
          scalesPageToFit={false}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          allowUniversalAccessFromFileURLs={true}
          startInLoadingState={false}
          onMessge={this.onMessage}
          source={{ uri: this.state.url }}
        />
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, null)(HostLivePage);
