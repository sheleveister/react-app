import React, { PropTypes } from 'react';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { addTodo } from './actions';

import './styles.less';

class HomePage extends React.Component {

  static path = '/';
  static PropTypes = {
    home: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      todoName: ''
    };

    bindAll(this, ['renderTodoList', 'inputOnChange', 'addTodo']);
  }

  inputOnChange(value) {
    this.setState({ todoName: value });
  }

  addTodo() {
    const { todoList } = this.props.home;
    const id = todoList.length + 1;
    const name = this.state.todoName;
    this.props.dispatch( addTodo(id, name) );
    this.setState({ todoName: '' });
  }

  renderTodoList(item, i) {
    return (
      <li key={ i }>{ item.name }</li>
    );
  }

  render() {
    const { todoName } = this.state;
    const { todoList, error } = this.props.home;

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

function mapStateToProps(state) {
  return {
    home: state.home
  };
}

export default connect(mapStateToProps)(HomePage);
