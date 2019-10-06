import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
/* import { tsModuleDeclaration } from '@babel/types'; */
import { Input, Item, Button, Icon } from 'native-base';
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
  };
  delButton = (hapus) => {
    const items = this.state.tasks.filter(function (item) { return item != hapus.item; });
    this.setState({ tasks: items });
  };
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
        {this.state.tasks.map((item, index) =>
          <View style={styles.tasklist}>
            <Text style={styles.itemFlat}>{item}</Text>
            <Icon style={styles.iconTrash} onPress={() => this.delButton({ item })} type="FontAwesome" name="trash" />
          </View>
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
  tasklist: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  itemFlat: {
    fontSize: 18,
    padding: 10,
    flex: 1,
  },
  iconTrash: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderWidth: 2,
    borderColor: 'red',

  },
})
