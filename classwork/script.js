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

// const oldStudent = {
//     firstName: 'Naheem',
//     lastName: 'Sulaimon',
//     age: 20,
// }

// const newStudent = {};

// const oldStudentfullName = `${oldStudent.firstName} ${oldStudent.lastName}`;
// const oldStudentAge = oldStudent.age;

// newStudent.firstName = prompt('Enter your first name');
// newStudent.lastName = prompt('Enter your last name');
// newStudent.age = Number(prompt('Enter your age'));


// const newStudentfullName = `${newStudent.firstName} ${newStudent.lastName}`;
// const newStudentAge = newStudent.age;

// document.getElementById('old-student-fullname').textContent = oldStudentfullName;
// document.getElementById('old-student-age').textContent = oldStudentAge;

// document.getElementById('new-student-fullname').textContent = newStudentfullName;
// document.getElementById('new-student-age').textContent = newStudentAge;

// const array = [
//             {name: "Ade", age: 20},
//             {name: "Tolu", age: 25},    
//             {name: "Bola", age: 30},
//             {name: "Sola", age: 40},
//             {name: "Samson", age: 39}
//         ]

// const result = array.map((value) => value.name)
// // const result2 = array.map((value) => value.age)


// const container = document.getElementById('time');

// container.innerHTML = result
//   .map(result => `<div class="box"><h2 id="old-student-fullname">${result}</h2></div>`)
//   .join(""); 

// const value = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// const value = "This is a page"

// document.getElementsByClassName("title")[0].textContent = value

const value = "Welcome to Flip2Tech"


const btn = document.querySelector("button");

btn.addEventListener("mouseover", () => {
    document.querySelector(".title").textContent = value
});

btn.addEventListener("mouseout", () => {
    document.querySelector(".title").textContent = ""
});











  
  