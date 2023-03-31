import {StyleSheet} from 'react-native';
import {general, colors, fonts} from '../../styles';
import { Dimensions, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
var {width,height} = Dimensions.get("window");
const wh = height/width
const trueheight = wh  > 1.8 ? height+ StatusBarManager.HEIGHT * 2 : height;

const baseStyle = {
    root: {
      flex: 1,
      height: trueheight,
      width,
      color: '#333'
    },
    content: {
      // paddingTop: 20,
      backgroundColor: '#fff',
      // flexGrow: 1,
    },
    box: {
      border: '1'
    },
    row: {
      flexDirection: 'row',
    },
    inputItemsheet: {
      width: 300,
      position: 'absolute'
    },
    line: {
      height: 0.5,
      backgroundColor: '#D0D4D4',
    },
    toBotmFate: {
      position: 'absolute',
      width: '100%',
      textAlign: 'center',
      top: trueheight * 0.6,
      fontSize: 14,
      color: '#999'
    }
  }
const styles: any = StyleSheet.create({...baseStyle, ...general, ...colors, ...fonts});

export default styles;
