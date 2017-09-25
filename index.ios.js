/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  AlertIOS,
} from 'react-native';


const shareData = require('./shareData.json').data;

//计算
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var cellWH = 100;
var clos = 3;

var VMargin = (width - clos * cellWH) / (clos + 1);


export default class ListViewShare extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
    };
  }

  render() {
    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            contentContainerStyle={styles.contentContainerStyle}
        />
    );
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(shareData)
    })
  }



  _renderRow(rowData){
      return(

          <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(rowData.title)}}>
            <View style={styles.cellStyles}>
              <Image source={{uri:rowData.icon}} style={styles.imageStyles}/>
              <Text>{rowData.title} </Text>
            </View>
          </TouchableOpacity>

      );
  }
}

const styles = StyleSheet.create({

  contentContainerStyle: {

    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',

  },

  cellStyles: {

    width:cellWH,
    height:cellWH,
    marginLeft:VMargin,
    marginTop:VMargin,
    alignItems:'center',
  },

  imageStyles: {

    width:80,
    height:80,
    resizeMode:'contain',

  },
});

AppRegistry.registerComponent('ListViewShare', () => ListViewShare);
