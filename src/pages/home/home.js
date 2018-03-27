import React, { PropTypes } from 'react';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { addTodo, likeTodo } from './actions';
import classname from 'classname';

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

  likeTodo(item) {
    this.props.dispatch( likeTodo(item) );
  }

  renderTodoList(item, i) {
    const likeClasses = classname('item__btn', 'btn', 'btn-danger', {
      'is-liked': item.liked
    });
    return (
      <li key={ i } className="item">
        <span className="item__name">{ item.name }</span>
        <button className="item__btn btn btn-success">Edit</button>
        <button className={ likeClasses }
          onClick={ this.likeTodo.bind(this, item) }>Like</button>
      </li>
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
