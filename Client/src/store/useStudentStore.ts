import { create } from 'zustand';
import { fetchStudents } from '@/services/studentService';
import { Student } from '@/types/type';

interface StudentState {
  students: Student[];
  loading: boolean; 
  fetchStudentsData: () => Promise<void>; 
}

export const useStudentStore = create<StudentState>((set) => ({
  students: [],
  loading: false, 

  fetchStudentsData: async () => {
    set({ loading: true });
    try {
      const data = await fetchStudents();
      set({
        students: data.map((student: Student) => ({
          ...student,
          date_joined: new Date(student.date_joined),
          last_login: new Date(student.last_login),
        })),
      });
    } catch (error) {
      console.error('Failed to fetch students data:', error);
    } finally {
      set({ loading: false });
    }
  },
}));
