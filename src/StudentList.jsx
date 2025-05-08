import React from 'react';

const StudentList = () => {
  const students = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sarah' },
    { id: 3, name: 'Mike' },
    { id: 4, name: 'Emily' },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;