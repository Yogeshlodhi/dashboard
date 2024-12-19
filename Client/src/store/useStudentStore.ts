import {create} from 'zustand';
import { fetchStudents } from '@/services/studentService'; // Adjust the path based on your project structure
import { Student } from '@/types/type';


interface StudentState {
  students: Student[];
  fetchStudentsData: () => void;
}

export const useStudentStore = create<StudentState>((set) => ({
  students: [],
  fetchStudentsData: async () => {
    try {
      const data = await fetchStudents();
      set({
        students: data.map((student : Student) => ({
          ...student,
          date_joined: new Date(student.date_joined),
          last_login: new Date(student.last_login),
        })),
      });
    } catch (error) {
      console.error('Failed to fetch students data:', error);
    }
  },
}));
