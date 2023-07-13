import { promisePool } from '../db.js';

async function createStudent({ name, idNumber, course, level }) {
  const result = {
    data: null,
    error: null,
  };

  try {
    const query = 'INSERT INTO student(name, idNumber, course, level) VALUES(?,?,?,?);';
    const [data] = await promisePool.execute(query, [name, idNumber, course, level]);
    console.log(data);
    result.data = data;
  } catch (error) {
    console.log(error);
    result.error = error.code;
  }

  return result;
}

async function getStudent(idNumber) {
  const result = {
    data: null,
    error: null,
  };

  try {
    const query = 'SELECT * FROM student where idNumber = ?;';
    const [rows] = await promisePool.execute(query, [idNumber]);
    console.log(rows);
    result.data = rows;
  } catch (error) {
    console.log(error);
    result.error = error.code;
  }
  return result;
}

async function getAllStudents() {
  const result = {
    data: null,
    error: null,
  };
  try {
    const query = 'SELECT * FROM student';
    const [rows] = await promisePool.execute(query);
    result.data = rows;
  } catch (error) {
    result.error = error.code;
  }
  return result;
}

async function updateStudent({ currentIdNumber, updatedData }) {
  const result = {
    data: null,
    error: null,
  };

  try {
    const { name, idNumber, course, level } = updatedData;

    const query = `
      UPDATE student
      SET name=?, idNumber=?, course=?, level=?
      WHERE idNumber=?
      `;

    const [data] = await promisePool.execute(query, [
      name,
      idNumber,
      course,
      level,
      currentIdNumber,
    ]);

    result.data = data;
  } catch (error) {
    console.log(error);
    result.error = error;
  }
  return result;
}

async function deleteStudent(idNumber) {
  const result = {
    data: null,
    error: null,
  };

  try {
    const query = 'DELETE FROM student WHERE idNumber=?;';
    const [data] = await promisePool.execute(query, [idNumber]);
    result.data = data;
  } catch (error) {
    result.error = error.code;
  }
  return result;
}

export { createStudent, getStudent, getAllStudents, updateStudent, deleteStudent };
