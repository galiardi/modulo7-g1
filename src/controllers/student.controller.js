import {
  createStudent,
  getStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
} from '../models/student.model.js';

async function createStudentController(req, res) {
  const response = {
    message: 'Creating student',
    data: null,
    error: null,
  };

  const student = req.body;
  const { name, idNumber, course, level } = student;

  if (!name || !idNumber || !course || !level) {
    response.error = 'Missing required parameters';
    return res.status(400).send({ response });
  }

  const { error, data } = await createStudent(student);

  if (error) {
    response.error = `Error creating student: ${error}`;
    return res.status(500).send({ response });
  }

  response.data = data;
  return res.status(201).send(response);
}

async function getStudentController(req, res) {
  const response = {
    message: 'Getting student',
    data: null,
    error: null,
  };

  const { idNumber } = req.params;

  const { error, data } = await getStudent(idNumber);

  if (error) {
    response.error = `Error getting student: ${error}`;
    return res.status(500).send(response);
  }

  response.data = data;
  return res.status(200).send(response);
}

async function getAllStudentsController(req, res) {
  const response = {
    message: 'Getting all students',
    data: null,
    error: null,
  };

  const { error, data } = await getAllStudents();

  if (error) {
    response.error = error;
    return res.status(500).send(response);
  }

  response.data = data;
  return res.status(200).send(response);
}

async function updateStudentController(req, res) {
  const response = {
    message: 'Updating student',
    data: null,
    error: null,
  };

  const currentIdNumber = req.params.idNumber;
  const updatedData = req.body;

  const { name, idNumber, course, level } = updatedData;
  if (!name || !idNumber || !course || !level) {
    response.error = 'Missing required parameters';
    return res.status(400).send(response);
  }

  const { error, data } = await updateStudent({ currentIdNumber, updatedData });

  if (error) {
    response.error = `Error updating student: ${error}`;
    return res.status(500).send(response);
  }

  response.data = data;
  return res.status(200).send(response);
}

async function deleteStudentController(req, res) {
  const response = {
    message: 'Deleting student',
    data: null,
    error: null,
  };

  const { idNumber } = req.params;

  const { error, data } = await deleteStudent(idNumber);

  if (error) {
    response.error = `Error deleting student: ${error}`;
    res.status(500).send(response);
  }

  response.data = data;
  res.status(200).send(response);
}

export {
  createStudentController,
  getStudentController,
  getAllStudentsController,
  updateStudentController,
  deleteStudentController,
};
