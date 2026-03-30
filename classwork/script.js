// const men = Number(prompt('Enter the number of men'));

// const women = Number(prompt('Enter the number of women'));

// const children = Number(prompt('Enter the number of children'));

// const total = men + women + children;


// const menPercent = `${(men * 100 / total).toFixed(2)}%`;

// const womenPercent = `${(women * 100 / total).toFixed(2)}%`;

// const childrenPercent = `${(children * 100 / total).toFixed(2)}%`;

// document.getElementById('men-population').textContent = men.toLocaleString();
// document.getElementById('men-percent').textContent = menPercent;
// document.getElementById('women-population').textContent = women.toLocaleString();
// document.getElementById('women-percent').textContent = womenPercent;
// document.getElementById('children-population').textContent = children.toLocaleString();
// document.getElementById('children-percent').textContent = childrenPercent;

const oldStudent = {
    firstName: 'Naheem',
    lastName: 'Sulaimon',
    age: 20,
}

const newStudent = {};

const oldStudentfullName = `${oldStudent.firstName} ${oldStudent.lastName}`;
const oldStudentAge = oldStudent.age;

newStudent.firstName = prompt('Enter your first name');
newStudent.lastName = prompt('Enter your last name');
newStudent.age = Number(prompt('Enter your age'));


const newStudentfullName = `${newStudent.firstName} ${newStudent.lastName}`;
const newStudentAge = newStudent.age;

document.getElementById('old-student-fullname').textContent = oldStudentfullName;
document.getElementById('old-student-age').textContent = oldStudentAge;

document.getElementById('new-student-fullname').textContent = newStudentfullName;
document.getElementById('new-student-age').textContent = newStudentAge;