import React from 'react';
import './App.css';
import StudentsList from './components/StudentsList';
import CoursesList from './components/CoursesList';
import AddStudent from './components/AddStudent';
import { Provider } from 'react-redux';
import store from './store';


const App = (props) => {
  return (
    <Provider store={store}>
      <h1>Hello, {props.name}</h1>;
      <CoursesList />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <AddStudent />
      <StudentsList />
      <br></br>
    </Provider >
  );
}

export default App;
