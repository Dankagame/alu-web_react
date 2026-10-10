interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 24,
  location: 'London',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Paris',
};

const studentsList: Student[] = [student1, student2];
const studentTable: HTMLTableElement = document.createElement('table');
const tableHead: HTMLTableSectionElement = studentTable.createTHead();
const headingRow: HTMLTableRowElement = tableHead.insertRow();

['First name', 'Location'].forEach((heading: string): void => {
  const headingCell: HTMLTableCellElement = document.createElement('th');
  headingCell.textContent = heading;
  headingRow.appendChild(headingCell);
});

const tableBody: HTMLTableSectionElement = studentTable.createTBody();

studentsList.forEach((student: Student): void => {
  const studentRow: HTMLTableRowElement = tableBody.insertRow();
  const firstNameCell: HTMLTableCellElement = studentRow.insertCell();
  const locationCell: HTMLTableCellElement = studentRow.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(studentTable);