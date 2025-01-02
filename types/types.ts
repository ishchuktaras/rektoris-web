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
};
export type StreamCreateProps = {
  title: string;
  classId: string;
};

export type Class = {
  sections: any;
  name: any;
  id: string;
  title: string;
  slug: string;
  streams: Stream[];
  createAt: string;
  updateedAt: string;
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
