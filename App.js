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
      text: '',
    };
  }
  //Awal Function
  addButton = () => {
    //unshift jika menambah keatas
    //push jika ke akhir array
    this.state.tasks.push(this.state.text)
    this.setState([...this.state.tasks])
    this.setState({ text: '' })
  }
  //Akhir Function

  render() {
    return (
      <View>
        <View style={styles.viewInput}>
          <Item regular style={styles.inputTodo}>
            <Input placeholder='New Todo' value={this.state.text} onChangeText={(text) => this.setState({ text })} />
          </Item>
          <Button info style={styles.addButton} onPress={() => this.addButton()}><Text> Add </Text></Button>
        </View>
        {this.state.tasks.map(item =>
          <Text style={styles.itemFlat}>{item}</Text>
        )}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewInput: {
    margin: 10,
    flexDirection: 'row',
  },
  inputTodo: {
    display: 'flex',
    flex: 6,
  },
  addButton: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginLeft: 10,
  },
  itemFlat: {
    fontSize: 18,
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
})
