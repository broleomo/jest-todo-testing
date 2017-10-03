
import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: actions.CREATE_TODO,
      payload
    }
    expect(actions.createTodo(payload)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should toggle an action', () => {
    const expectedAction = {
      type: actions.TOGGLE_TODO,
      payload: 1
    }
    expect(actions.toggleTodo(1)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should filter an action', () => {
    const expectedAction = {
      type: actions.FILTER_TODOS,
      payload: 'completed'
    }
    expect(actions.filterTodos('completed')).toEqual(expectedAction)
  })
})
