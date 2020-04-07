import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import Buttons from './components/buttons';
import Btn from './components/btn';
import TodoItem from './components/todoItem';

class App extends Component {
  state = {
    todo: {
      id: 0,
      text: '',
      isDone: false,
    },

    todos: [],

    todoCounter: 0,

    todosType: 'All',
  };

  handleChange = (str) => {
    const todo = this.state.todo;
    todo.text = str;
    this.setState({todo});
  };

  handleSubmit = () => {
    const {todo, todos} = this.state;
    let todoCounter = this.state.todoCounter;
    todoCounter++;

    todo.id = todoCounter;
    todos.push(todo);

    this.setState({
      todoCounter,
      todos,
      todo: {id: 0, text: '', isDone: false},
    });
  };

  handleToggleTodo = (todo) => {
    let todos = [...this.state.todos];
    const idx = todos.indexOf(todo);
    todos[idx].isDone = !todos[idx].isDone;

    this.setState({todos});
  };

  handleItemLeft = () => {
    let todos = [...this.state.todos];
    return todos.filter((todo) => todo.isDone === false).length;
  };

  handleClearComplete = () => {
    let todos = [...this.state.todos];
    let ans = todos.filter((item) => item.isDone !== true);

    this.setState({todos: ans});
  };

  handleTodoTypeChange = (name) => {
    this.setState({todosType: name});
  };

  handleDeleteTodo = (todo) => {
    let todos = [...this.state.todos];
    let ans = todos.filter((item) => item !== todo);
    this.setState({todos: ans});
  };

  render() {
    const {todos, todosType} = this.state;

    let filtered;
    if (todosType === 'All') filtered = todos;
    else if (todosType === 'Active')
      filtered = todos.filter((item) => item.isDone === false);
    else if (todosType === 'Completed')
      filtered = todos.filter((item) => item.isDone === true);

    return (
      <View style={styles.main}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 28,
              color: '#b71c1c',
              fontFamily: 'Do Hyeon',
            }}>
            Todo App
          </Text>
        </View>
        <View style={styles.inputHolder}>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={this.state.todo.text}
            onChangeText={this.handleChange}
            placeholder="What Needs to be Done?"
          />
          <Btn
            title="Add"
            w="20%"
            pv={22}
            ph={10}
            bgc="#009688"
            onPress={this.handleSubmit}
            radius={5}
            fontSize={15}
          />
        </View>
        {/* Todo Items Wrapper */}
        <View style={styles.wrapper}>
          {filtered.map((item) => (
            <TodoItem
              key={item.id}
              data={item}
              handleToggle={this.handleToggleTodo}
              todos={this.state.todos}
              deleteTodo={this.handleDeleteTodo}
            />
          ))}
        </View>
        <Buttons
          todoTypeChange={this.handleTodoTypeChange}
          itemLeft={this.handleItemLeft()}
          clearComplete={this.handleClearComplete}
          todosType={this.state.todosType}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#bdbdbd',
  },
  wrapper: {
    width: '92%',
    flex: 3,
    backgroundColor: '#e8eaf6',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 8,
  },
  input: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  inputHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
