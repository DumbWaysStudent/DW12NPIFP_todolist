import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
/* import { tsModuleDeclaration } from '@babel/types'; */
import { Input, Item, Button, Icon, CheckBox, ListItem } from 'native-base';
/* import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'; */


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: '1',
          nametask: 'work',
          selesai: false
        },
        {
          id: '2',
          nametask: 'swim',
          selesai: false
        },
        {
          id: '3',
          nametask: 'study',
          selesai: false
        },
        {
          id: '4',
          nametask: 'sleep',
          selesai: false
        },
        {
          id: '5',
          nametask: 'run',
          selesai: false
        }
      ],
      text: '',
    };
  }
  //Awal Function
  addButton = () => {
    if (this.state.text != '') {
      let id = this.state.tasks.length + 1
      const isi = { "id": id, "nametask": this.state.text, "selesai": false }
      this.setState({ tasks: [...this.state.tasks, isi], text: '' })
    }
  };
  delButton = (hapus) => {
    const items = this.state.tasks.filter(function (item) { return item.id != hapus.id; });
    this.setState({ tasks: items })
  };
  handleCheckBox = (centang) => {
    let dataItem = this.state.tasks.find(item => centang.id === item.id)
    if (dataItem) {
      dataItem.selesai = !centang.selesai
      this.setState([...this.state.tasks])
    }
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
        {this.state.tasks.map(item => {
          return (
            <ListItem key={item.id}>
              <Item style={styles.tasklist}>
                <CheckBox style={styles.cekBox} checked={item.selesai} onPress={() => this.handleCheckBox(item)} />
                <Text style={styles.nameTask}>{item.nametask}</Text>
              </Item>
              <Icon style={styles.iconTrash} onPress={() => this.delButton(item)} type="FontAwesome" name="trash" />
            </ListItem>
          )
        })}
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
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cekBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10

  },
  nameTask: {
    marginLeft: 15,
    flex: 1,
    fontSize: 16,

  },
  iconTrash: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    color: 'tomato'
  },
})
