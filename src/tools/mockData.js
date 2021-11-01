export const student = {
  id: 1,
  name: 'John Smith'
};

export const students = [
  {
    id: 1,
    name: 'John Smith'
  },
  {
    id: 2,
    name: 'Jane Smith'
  }
];

export const studentDetails = {
  id: '1',
  dob: '1980-01-01',
  program: 'Cardiology',
  email: 'j255sm@uwaterloo.ca'
};

export const studentWithDetails = {
  ...student,
  details: studentDetails
};

export const course = {
  id: 1,
  name: 'CourseA'
};

export const courses = [
  {
    id: 1,
    name: 'CourseA'
  },
  {
    id: 2,
    name: 'CourseB'
  }
];

export const courseStudents = {
  id: 1,
  students
};
