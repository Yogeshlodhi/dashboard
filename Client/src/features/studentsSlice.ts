import { Student } from '@/types/type';
import { create } from 'zustand';


interface StudentState {
  students: Student[];
  fetchStudents: () => void;
}

export const useStudentStore = create<StudentState>((set) => ({
  students: [],
  fetchStudents: async () => {
    const response = await fetch("/api/students");
    const data = await response.json();
    set({ students: data });
  },
}));
