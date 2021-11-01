import * as studentActions from './studentActions';
import * as types from './types';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import { students, student, studentDetails } from '../tools/mockData';
// Test an async action with thunk and store mocking
describe('studentActions', () => {
  describe('Fetch students thunk', () => {
    it('should create FETCH_STUDENTS when fetch students', () => {
      // ** Code along
    });

    it('should create FETCH_STUDENT_DETAILS when fetch student details', () => {
      // Self-paced
    });

    // Test action with thunk but not mocking store
    it('should create NEW_STUDENT when create a new student', () => {
      // ** Code along
    });
  });
});
