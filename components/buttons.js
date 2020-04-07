import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Btn from './btn';

class Buttons extends Component {
  render() {
    const {todoTypeChange, itemLeft, clearComplete, todosType} = this.props;
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View style={styles.secondLine}>
          <Btn
            onPress={() => todoTypeChange('All')}
            title="All"
            w="33%"
            bgc={todosType !== 'All' ? '#bdbdbd' : '#212121'}
            color={todosType === 'All' ? '' : 'black'}
            bw={todosType !== 'All' ? 2 : 0}
          />
          <Btn
            onPress={() => todoTypeChange('Active')}
            title="Active"
            w="33%"
            bgc={todosType !== 'Active' ? '#bdbdbd' : '#212121'}
            color={todosType === 'Active' ? '' : 'black'}
            bw={todosType !== 'Active' ? 2 : 0}
          />
          <Btn
            onPress={() => todoTypeChange('Completed')}
            title="Completed"
            w="33%"
            bgc={todosType !== 'Completed' ? '#bdbdbd' : '#212121'}
            color={todosType === 'Completed' ? '' : 'black'}
            bw={todosType !== 'Completed' ? 2 : 0}
          />
        </View>
        <View style={styles.firstLine}>
          <View style={styles.leftCounter}>
            <Text style={{textAlign: 'center'}}>Item(s) Left: {itemLeft}</Text>
          </View>
          <Btn
            title="Clear completed"
            w="50%"
            bgc="#e53935"
            onPress={clearComplete}
          />
        </View>
      </View>
    );
  }
}

export default Buttons;

const styles = StyleSheet.create({
  firstLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftCounter: {
    borderWidth: 2,
    borderColor: 'black',
    width: '50%',
    padding: 4,
    margin: 3,
  },
});
