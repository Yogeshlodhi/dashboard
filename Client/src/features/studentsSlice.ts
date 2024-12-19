import { create } from 'zustand';

type Student = {
  name: string;
  cohort: string;
  courses: string[];
  dateJoined: string;
  lastLogin: string;
  status: boolean;
};

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
