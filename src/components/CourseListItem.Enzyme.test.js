import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import CourseListItem from './CourseListItem';
import { mount } from '../tools/testSetup';
import * as courseActions from '../actions/courseActions';

import { course, students } from '../tools/mockData';

describe('CourseListItem', () => {
  it('should render course name', () => {
    // Self-paced
  });

  it('should load course students when clicking the button', async () => {
    // Self-paced
  });
});
