import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import maths from '@/assets/maths.png';
import science from '@/assets/science.png';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect } from "react";

import { useStudentStore } from '@/store/useStudentStore';
import { Student } from "@/types/type";


export function DataTable() {
  const { students, fetchStudentsData } = useStudentStore();

  useEffect(() => {
    fetchStudentsData();
  }, [students]);

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex mb-8 items-center justify-between">
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px] bg-[#E9EDF1] text-[#3F526E] font-bold">
              <SelectValue placeholder="AY 2024-25" />
            </SelectTrigger>
            <SelectContent className="bg-[#E9EDF1]">
              <SelectItem value="light">AY 2022-23</SelectItem>
              <SelectItem value="dark">AY 2023-24</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] bg-[#E9EDF1] text-[#3F526E] font-bold">
              <SelectValue placeholder="CBSE 9" />
            </SelectTrigger>
            <SelectContent className="bg-[#E9EDF1]">
              <SelectItem value="light">CBSE 10</SelectItem>
              <SelectItem value="system">CBSE 11</SelectItem>
              <SelectItem value="dark">CBSE 12</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className='text-[#3F526E] font-bold'>
          <Plus color="#3F526E" fontWeight={800} />
          Add new Student
        </Button>
      </div>

      <div className="overflow-auto h-[40rem]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Cohort</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student: Student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.cohort}</TableCell>
                <TableCell className="flex gap-4 w-[25rem]">
                  {student.courses.map((co, index) => (
                    <div key={index} className="flex items-center justify-start bg-[#F6F8FA] p-0.5 rounded-md w-[10rem]">
                      <div className="w-6 h-6 rounded-md cursor-pointer flex items-center overflow-hidden">
                        <img src={index%2 != 0 ? maths : science} className="h-full object-contain" alt="subject"/>
                      </div>
                      <h1 className="ml-2">{co}</h1>
                    </div>
                  ))}
                </TableCell>
                <TableCell>{new Date(student.date_joined).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</TableCell>
                <TableCell>{new Date(student.last_login).toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</TableCell>
                <TableCell>
                  <div className={`w-[15px] h-[15px] rounded-full ${student.status ? "bg-green-500" : "bg-red-500"}`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
