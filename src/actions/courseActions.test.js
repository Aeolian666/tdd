import * as courseActions from './courseActions';
import * as types from './types';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import { courses } from '../tools/mockData';

describe('courseActions', () => {
  describe('fetchCourses', () => {
    it('should create FETCH_COURSES when fetch Courses', () => {
      // Self-paced
    });
  });

  describe('loadStudentsForCourse', () => {
    it('should create LOAD_STUDENTS_FOR_COURSE when fetch students details for course', () => {
      // Self-paced
    });
  });
});
