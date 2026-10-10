export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string,
): string => `${firstName.charAt(0)}. ${lastName}`;

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

export class StudentClass implements StudentClassInterface {
  constructor(
    private readonly firstName: string,
    private readonly lastName: string,
  ) {}

  displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
}

const studentConstructor: StudentConstructor = StudentClass;
const student: StudentClassInterface = new studentConstructor('Jane', 'Doe');

console.log(student.displayName());
console.log(student.workOnHomework());