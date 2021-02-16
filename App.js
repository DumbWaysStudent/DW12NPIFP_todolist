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
          boolDone: false
        },
        {
          id: '2',
          nametask: 'swim',
          boolDone: false
        },
        {
          id: '3',
          nametask: 'study',
          boolDone: false
        },
        {
          id: '4',
          nametask: 'sleep',
          boolDone: false
        },
        {
          id: '5',
          nametask: 'run',
          boolDone: false
        }
      ],
      text: '',
      id: 6,
      condiEdit: false,
      idIndex: '',
    };
  }
  //Awal Function
  addButton = () => {
    if (this.state.text != '') {
      const isi = { "id": this.state.id, "nametask": this.state.text, "boolDone": false }
      this.setState({ tasks: [...this.state.tasks, isi], text: '', id: this.state.id + 1 })
    }
  };
  delButton = (delFunction) => {
    const items = this.state.tasks.filter(function (item) { return item.id != delFunction.id; });
    this.setState({ tasks: items })
  };
  handleCheckBox = (checkBoxDone) => {
    let dataItem = this.state.tasks.find(item => checkBoxDone.id === item.id)
    if (dataItem) {
      dataItem.boolDone = !checkBoxDone.boolDone
      this.setState({})
    }
  };
  handleEdit = (diEdit) => {
    let indexOfArray = this.state.tasks.indexOf(diEdit)
    this.setState({ text: diEdit.nametask, condiEdit: true, idIndex: indexOfArray })
  };
  handleChange = () => {
    if (this.state.text != '') {
      this.state.tasks[this.state.idIndex].nametask = this.state.text
      this.setState([...this.state.tasks])
      this.setState({ text: '', condiEdit: false })
    } else {
      alert('Mohon di isi')
    }
  };
  //Akhir Function

  render() {
    return (
      <View>
        {this.state.condiEdit ?
          <View style={styles.viewInput}>
            <Item regular style={styles.inputTodo}>
              <Input value={this.state.text} onChangeText={(text) => this.setState({ text })} />
            </Item>
            <Button info style={styles.addButton} onPress={() => this.handleChange()}><Text> Change </Text></Button>
          </View> :
          <View style={styles.viewInput}>
            <Item regular style={styles.inputTodo}>
              <Input placeholder='New Todo' value={this.state.text} onChangeText={(text) => this.setState({ text })} />
            </Item>
            <Button info style={styles.addButton} onPress={() => this.addButton()}><Text> Add </Text></Button>
          </View>
        }

        {this.state.tasks.map(item => {
          return (
            <ListItem key={item.id}>
              <Item style={styles.tasklist}>
                <CheckBox style={styles.cekBox} checked={item.boolDone} onPress={() => this.handleCheckBox(item)} />
                <Text style={styles.nameTask}>{item.nametask}</Text>
              </Item>
              <Icon style={styles.iconEdit} onPress={() => this.handleEdit(item)} type="FontAwesome" name="pencil" />
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
  iconEdit: {
    fontSize: 20,
  },
  iconTrash: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    color: 'tomato',
    fontSize: 20
  },
})
