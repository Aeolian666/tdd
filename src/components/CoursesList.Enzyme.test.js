import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import CoursesList from './CoursesList';
import { mount } from '../tools/testSetup';

import { courses, courseStudents } from '../tools/mockData';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

function renderCoursesList(args) {
  let store = mockStore({
    courses: { items: courses, students: courseStudents }
  });
  const defaultProps = {};
  const props = { ...defaultProps, ...args };
  const wrapper = mount(
    <Provider store={store}>
      <CoursesList {...props} />
    </Provider>
  );
  return {
    store,
    props,
    wrapper
  };
}

describe('CoursesList', () => {
  it('should render courses', () => {
    // Self-paced
    jest.mock('react-redux', () => ({
      useDispatch: () => { },
      useSelector: () => this.courses
    }));


  });
});
