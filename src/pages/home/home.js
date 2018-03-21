import React from 'react';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';

import './styles.less';

export default class HomePage extends React.Component {

  static path = '/';

  constructor(props) {
    super(props);

    this.state = {
      todoName: '',
      todoList: [
        {
          id: 1,
          name: 'Item 1'
        },
        {
          id: 2,
          name: 'Item 2'
        }
      ],
      error: ''
    };

    bindAll(this, ['renderTodoList', 'inputOnChange', 'addTodo']);
  }

  inputOnChange(value) {
    this.setState({ todoName: value });
  }

  addTodo() {
    if (this.state.todoName === '') {
      this.setState({ error: 'Field not should be empty' });
      return;
    }

    const id = this.state.todoList.length + 1;
    const name = this.state.todoName;

    const { todoList } = this.state;
    todoList.push( { id, name });

    this.setState({ todoList });
    this.setState({ todoName: '', error: '' });
  }

  renderTodoList(item, i) {
    return (
      <li key={ i }>{ item.name }</li>
    );
  }

  render() {
    const { todoName, todoList, error } = this.state;

    return (
      <div>
        <div className="col-md-12 alert alert-success">
          Home
        </div>

        <div className="col-md-6 offset-md-3">
          <Input value={ todoName }
            onChange={ this.inputOnChange }
            error={ error }
          />
          <button className="btn btn-primary" onClick={ this.addTodo }>Add</button>

          <ul className="to-do-list">
            { todoList.map(this.renderTodoList) }
          </ul>
        </div>
      </div>
    );
  }

}
