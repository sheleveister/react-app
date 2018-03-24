import { ADD_TODO } from './actions';

const initialState = {
  todoList: [
    {
      id: 1,
      name: 'Item 1'
    }
  ],
  error: ''
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const todoList = state.todoList;

      if (!action.error) {
        todoList.push({ id: action.id, name: action.name });
      }

      return Object.assign({}, state, {
        error: action.error,
        todoList
      });
    default:
      return state;
  }
}

const HomeReducer = {
  home: homeReducer
};

export default HomeReducer;
