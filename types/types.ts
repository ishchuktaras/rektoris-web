export type Contact = {
  name: string;
  sections: any;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  schoolName: string;
  country: string;
  schoolPage: string;
  numberOfStudents: number;
  role: string;
  media: string;
  pointsToSolve: string;
  createdAt: string;
  updatedAt: string;
};

export type ClassCreateProps = {
  title: string;
  schoolId: string;
};

export type DepartmentCreateProps = {
  name: string;
  schoolId: string;
};

export type SubjectCreateProps = {
  name: string;
  code: string;
  shortName: string;
  category: string;
  type: string;
  departmentId: string;
  departmentName: string;
  passingMarks: number;
  totalMarks: number;
};

export type StreamCreateProps = {
  title: string;
  classId: string;
  schoolId: string;
};

export type Class = {
  id: string;
  title: string;
  slug: string;
  streams: StreamWithCount[]; // Updated Stream type defined below
  _count: {
    students: number; // Count of students directly in the class
  };
  createdAt: string; // Fixed typo
  updatedAt: string; // Fixed typo
};

export interface Department {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  hodId?: string;
  hodName?: string;
  hodStartDate?: Date;
  teachers: StreamWithCount[];
  subjects: StreamWithCount[];
  budjet?: number;
  budjetYear?: string;
}

export type DepartmentBrief = {
  id: string;
  name: string;
};
export type ClassBrief = {
  id: string;
  title: string;
};

export type SubjectBrief = {
  id: string;
  name: string;
};

export interface Subject {
  id: string;
  name: string;
  slug: string;
  code: string;
  shortName?: string;
  category: SubjectCategory;
  type: SubjectType;
  passingMarks?: number;
  totalMarks?: number;
  department?: Department;
  departmentId: string;
  departmentName: string;
  isActive: boolean;
  isOptional: boolean;
  hasTheory: boolean;
  hasPractical: boolean;
  createdAt: Date;
  updatedAt: Date;
  labRequired: boolean;
}

export enum SubjectCategory {
  CORE = "ZÁKLADNÍ",
  ELECTIVE = "VOLITELNÝ",
  ADDITIONAL = "DODATEČNÝ",
  VOCATIONAL = "ODBORNÝ",
  LANGUAGE = "JAZYK",
  SCIENCE = "VĚDA",
  ARTS = "UMĚNÍ",
  COMMERCE = "OBCHOD",
  EXTRA_CURRUCULAR = "MIMOŠKOLNÍ",
  OTHER = "OSTATNÍ",
}

export enum SubjectType {
  THEORY = "TEORIE",
  PRACTICAL = "PRAKTICKÝ",
  ELECTIVE = "VOLITELNÝ",
}

export type StreamWithCount = {
  id: string;
  title: string;
  slug: string;
  classId: string;
  _count: {
    students: number; // Count of students in the stream
  };
  createdAt: string;
  updatedAt: string;
};

export type Stream = {
  id: string;
  title: string;
  slug: string;
  classId: string;
  class: Class;
  createAt: Date;
  updateedAt: Date;
};

export type Parent = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  relationship: string;
  email: string;
  nationalId: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  nationality: string;
  whatsappNumber: string;
  contactMethod: string;
  occupation: string;
  address: string;
  password: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type Student = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  parentId: string;
  parentName?: string;
  classTitle?: string;
  classId: string;
  streamTitle?: string;
  streamId: string;
  password: string;
  imageUrl: string;
  phone: string;
  state: string;
  birthCertificateNumber: string;
  nationality: string;
  religion: string;
  gender: string;
  dateOfBirth: string;
  rollNumber: string;
  sponsorshipType: "PS" | "SS";
  regNo: string;
  admissionDate: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type TeacherCreateProps = {
  id: string;
  title: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  nationality: string;
  nationalId: string;
  gender: string;
  dateOfBirth: string;
  contactMethod: string;
  password: string;
  qualification: string;
  dateOfJoining: string;
  designation: string;
  departmentId: string;
  departmentName: string;
  mainSubject: string;
  mainSubjectId: string[];
  subjects: string[];
  subjectIds: string[];
  classIds: string[];
  classes: string[];
  experience: number;
  occupation: string;
  address: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  schoolId: string;
  schoolName: string;
};

export interface Teacher {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  dateOfBirth: string;
  gender: string;
  imageUrl: string;
  nationalId: string;
  password: string;
  isActive: boolean;
  lastLogin: string | null;
  contactMethod: string;
  role?: string | null;
  employeeId: string;
  dateOfJoining: Date;
  designation: string;
  departmentName: string;
  departmentId: string;
  mainSubject: string;
  mainSubjectId: string;
  qualification: string;
  salary: number | null;
  subjects: string[];
  classes: string[];
  classIds: string[];
  address: string;
  nationality: string;
  experience: number;
  bio?: string | null;
  skills?: string[] | null;
};

export interface User {
  id: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
  name: string;
  phone: string | null;
  image?: string | null;
  schoolId?: string | null;
  schoolName?: string | null;
  createdAt: string;
  updatedAt: string;
}

export type School = {
  id: string;
  name: string;
  logo: string | null;
  slug: string;
};

export type UserCreateProps = {
  email: string;
  password: string;
  role: "SUPER_ADMIN" | "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
  name: string;
  phone?: string;
  image?: string;
  schoolId?: string;
  schoolName?: string;
};
