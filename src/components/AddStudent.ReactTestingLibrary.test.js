import React from 'react';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';

import AddStudent from './AddStudent';
import * as studentActions from '../actions/studentActions';

afterEach(cleanup);
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

function renderAddStudent(args) {
  let store = mockStore();
  const wrapper = render(
    <Provider store={store}>
      <AddStudent />
    </Provider>
  );
  return { store, wrapper };
}

describe('Add Student Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Student name input', () => {
    const { wrapper } = renderAddStudent();
    const { getByPlaceholderText, debug } = wrapper;
    // debug();
    getByPlaceholderText('Student Manhattan');
  });

  it('should dispatch add student function when name is provided', async () => {
    jest.spyOn(studentActions, 'addStudent');
    renderAddStudent();
    fireEvent.change(screen.getByPlaceholderText('Student Manhattan'), {
      target: { value: 'Jason Doe' }
    });
    fireEvent.click(screen.getByText(/Add/i));

    expect(studentActions.addStudent).toHaveBeenCalledTimes(1);
  });
});
