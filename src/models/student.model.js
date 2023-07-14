import { promisePool } from '../db.js';

async function createStudent({ name, idNumber, course, level }) {
  try {
    const query = 'INSERT INTO student(name, idNumber, course, level) VALUES(?,?,?,?);';
    const [data] = await promisePool.execute(query, [name, idNumber, course, level]);

    if (data.insertId === 0) return null;

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getStudent(idNumber) {
  try {
    const query = 'SELECT * FROM student where idNumber = ?;';
    const [rows] = await promisePool.execute(query, [idNumber]);

    if (rows?.length === 0) return null;

    return rows;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getAllStudents() {
  try {
    const query = 'SELECT * FROM student';
    const [rows] = await promisePool.execute(query);
    return rows;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function updateStudent({ currentIdNumber, updatedData }) {
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

    if (data?.affectedRows === 0) return null;

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function deleteStudent(idNumber) {
  try {
    const query = 'DELETE FROM student WHERE idNumber=?;';
    const [data] = await promisePool.execute(query, [idNumber]);

    if (data?.affectedRows === 0) return null;

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { createStudent, getStudent, getAllStudents, updateStudent, deleteStudent };
