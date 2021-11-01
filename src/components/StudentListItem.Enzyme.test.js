import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import StudentListItem from './StudentListItem';
import { mount } from '../tools/testSetup';
import { student, studentDetails } from '../tools/mockData';
import * as studentActions from '../actions/studentActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

function renderStudentItem(args, storeState) {
  let store = mockStore(storeState);
  const defaultProps = {
    student: {}
  };
  const props = { ...defaultProps, ...args };
  const wrapper = mount(
    <Provider store={store}>
      <StudentListItem {...props} />
    </Provider>
  );
  return {
    store,
    props,
    wrapper
  };
}
describe('Student List Item', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should create button with student name', () => {
    const initialState = { students: { details: { 1: studentDetails } } };
    const { wrapper } = renderStudentItem({ student }, initialState);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').text()).toEqual(student.name);
  });
  it('should render details when there is one', () => {
    const initialState = { students: { details: { 1: studentDetails } } };
    const { wrapper } = renderStudentItem({ student }, initialState);
    expect(wrapper.find('h5').length).toBe(3);
  });

  it('should not details when there is none', () => {
    const initialState = { students: { details: {} } };
    const { wrapper } = renderStudentItem({ student }, initialState);
    expect(wrapper.find('h5').length).toBe(0);
  });

  it('should dispatch fetchStudentDetails function when get details button is clicked', async () => {
    jest.spyOn(studentActions, 'fetchStudentDetails');
    const initialState = { students: { details: { 1: studentDetails } } };
    const { wrapper } = renderStudentItem({}, initialState);
    wrapper.find('button').simulate('click');
    expect(studentActions.fetchStudentDetails).toHaveBeenCalledTimes(1);
  });
});
