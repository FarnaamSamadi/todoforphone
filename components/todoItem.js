import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

export default class TodoItem extends Component {
  render() {
    const {data, handleToggle, deleteTodo} = this.props;
    const styles = StyleSheet.create({
      item: {
        marginLeft: 5,
        textDecorationLine: `${data.isDone ? 'line-through' : 'none'}`,
        fontSize: 18,
        color: `${data.isDone ? '#424242' : 'black'}`,
      },
    });
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={() => handleToggle(data)}>
            <Icon
              name={
                data.isDone
                  ? 'checkbox-marked-circle'
                  : 'checkbox-blank-circle-outline'
              }
              size={22}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.item}>{data.text}</Text>
        </View>
        <TouchableWithoutFeedback onPress={() => deleteTodo(data)}>
          <Icon2 name="remove-circle-outline" size={22} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
