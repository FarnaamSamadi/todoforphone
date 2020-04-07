import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback, StyleSheet} from 'react-native';

class Btn extends Component {
  render() {
    const styles = StyleSheet.create({
      btn: {
        height: parseInt(`${this.props.h || 30}`),
        width: `${this.props.w || '100%'}`,
        backgroundColor: `${this.props.bgc || 'blue'}`,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: parseInt(`${this.props.radius || 1}`),
        paddingHorizontal: parseInt(`${this.props.ph || 12}`),
        paddingVertical: parseInt(`${this.props.pv || 12}`),
        margin: 3,
        borderWidth: parseInt(`${this.props.bw || 0}`),
        borderColor: '#212121',
      },
      txt: {
        color: `${this.props.color || 'white'}`,
        fontSize: parseInt(`${this.props.fontSize || 12}`),
      },
    });
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.btn}>
          <Text style={styles.txt}> {this.props.title} </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default Btn;
