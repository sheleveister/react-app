import { ADD_TODO, LIKE_TODO } from './actions';

const initialState = {
  todoList: [
    {
      id: 1,
      name: 'Item 1',
      liked: false
    }
  ],
  error: ''
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const todoList = state.todoList;

      if (!action.error) {
        todoList.push({ id: action.id, name: action.name, liked: false });
      }

      return Object.assign({}, state, {
        error: action.error,
        todoList
      });
    case LIKE_TODO:
      const index = state.todoList.findIndex(todo => todo.id === action.todo.id);
      state.todoList[index].liked = true;
      return Object.assign({}, state, {
        todoList: state.todoList
      });
    default:
      return state;
  }
}

const HomeReducer = {
  home: homeReducer
};

export default HomeReducer;
