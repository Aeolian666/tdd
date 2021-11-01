import React from 'react';
import StudentsList from './StudentsList';
import { mount } from '../tools/testSetup';
import { students } from '../tools/mockData';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);


function renderStudents(state) {
  let store = mockStore(state);

  const defaultProps = {};
  const props = { ...defaultProps };

  const wrapper = mount(
    <Provider store={store}>
      <StudentsList {...props} />
    </Provider>
  );
  return {
    props,
    wrapper
  };
}


describe('StudentsList', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => ({
      useDispatch: () => { },
      useSelector: () => { }
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should find some Students List title', () => {
    //code-along

  });


  it('should find some StudentListItem', () => {
    //code-along

  });

});
