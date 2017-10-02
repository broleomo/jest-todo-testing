import reducer from "./reducer";
import { createTodo, toggleTodo, filterTodo } from "./actions";


describe("CREATE_TODO", function() {
  test("creates a new todo", function () {
      const initialState = {todos: [], nextId: 1}
      const state = reducer(initialState, createTodo("Test"));
      expect(state.todos).toHaveLength(1);
      expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
  })

  test("updates nextId", function () {
      const initialState = {todos: [], nextId: 1}
      const state = reducer(initialState, createTodo("Test"));
      expect(state.nextId).toEqual(2);
  })
})

describe("TOGGLE_TODO", function(){
  test("toggles todo", function(){
    const initialState = {todos:[], nextId: 1 }
    const state=reducer(initialState, toggleTodo("Test"));
    expect(state.todos.done)toEqual({done:true, text: "Test"});
  })
})

describe("FILTER_TODOS", function(){
  test("filters todos", function(){
    const initialState = {todos:[], nextId: 1}
    const state = reducer(initialState, filterTodos("Test"));
    expect(state.filter.set).toEqual({set:set});
  })
})






'CREATE_TODO';
'TOGGLE_TODO';
'FILTER_TODOS';
