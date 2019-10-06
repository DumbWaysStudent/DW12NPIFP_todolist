import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, } from 'react-native';
/* import { tsModuleDeclaration } from '@babel/types'; */
import { Input, Item, Button } from 'native-base';
/* import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'; */


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        'work',
        'swim',
        'study',
        'sleep',
        'run'
      ],
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.tasks}
          renderItem={({ item }) => <Text style={styles.itemFlat}>{item}</Text>}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewInput: {
    margin: 10,
  },
  itemFlat: {
    fontSize: 18,
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
})
