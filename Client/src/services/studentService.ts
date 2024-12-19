import axios from 'axios';

const API_BASE_URL = 'https://dashboard-backend-nfn3.onrender.com';

export const fetchStudents = async () => {
  const response = await axios.get(`${API_BASE_URL}/students`);
  return response.data;
};

// additional function
export const addStudent = async (studentData: any) => {
  const response = await axios.post(`${API_BASE_URL}/students`, studentData);
  return response.data;
};
