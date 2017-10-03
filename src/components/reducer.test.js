import reducer from "../reducer";
import * as actions from "../actions";


describe("CREATE_TODO", function() {
  test("creates a new todo", function () {
      const initialState = {todos: [], nextId: 1}
      const state = reducer(initialState, actions.createTodo("Test"));
      expect(state.todos).toHaveLength(1);
      expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
  })

  test("updates nextId", function () {
      const initialState = {todos: [], nextId: 1}
      const state = reducer(initialState, actions.createTodo("Test"));
      expect(state.nextId).toEqual(2);
  })
})

describe("TOGGLE_TODO", function(){
  test("toggles todo", function(){
    const initialState = {todos:[{id:1, done: false, text:"Test"}]}
    const state=reducer(initialState, actions.toggleTodo(1));
    expect(state.todos[0].done).toEqual(true);
  })
})

describe("FILTER_TODOS", function(){
  test("filters todos", function(){
    const initialState = {filter: 'all'};
    const state = reducer(initialState, actions.filterTodos('completed'));
    expect(state.filter).toEqual('completed');
  })
})






'CREATE_TODO';
'TOGGLE_TODO';
'FILTER_TODOS';
