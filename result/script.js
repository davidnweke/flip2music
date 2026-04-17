const values = [
    {
        id: "001",
        name: "John Doe",
        english: 85,
        maths: 90,
        economics: 78,
        computer: 92,
        biology: 88,
        chemistry: 85
    },
    {
        id: "002",
        name: "Jane Smith",
        english: 92,    
        maths: 88,
        economics: 95,
        computer: 90,
        biology: 91,
        chemistry: 89
    },
    {
        id: "003",
        name: "Michael Johnson",
        english: 78,
        maths: 82,
        economics: 80,
        computer: 85,
        biology: 79,
        chemistry: 82
    },
    {
        id: "004",
        name: "Emily Davis",
        english: 88,
        maths: 91,
        economics: 87,
        computer: 93,
        biology: 90,
        chemistry: 86,
    },
    {
        id: "005",
        name: "David Wilson",
        english: 80,
        maths: 85,
        economics: 82,
        computer: 84,
        biology: 81,
        chemistry: 83,
    },
    {
        id: "006",
        name: "Cyril Samuel",
        english: 90,
        maths: 75,
        economics: 62,
        computer: 94,
        biology: 91,
        chemistry: 83,

    }
]

const cell = document.querySelector("tbody")

cell.innerHTML = values
   .map(result => {
    //    const total = result.english + result.maths + result.economics + result.computer + result.biology + result.chemistry;
    //    const average = (total / 6).toFixed(2);
       return `
        <tr>
            <td>${result.id}</td>
            <td>${result.name}</td>
            <td>${result.english}</td>
            <td>${result.maths}</td>
            <td>${result.economics}</td>
            <td>${result.computer}</td>
            <td>${result.biology}</td>
            <td>${result.chemistry}</td>
            <td>${result.english + result.maths + result.economics + result.computer + result.biology + result.chemistry}</td>
            <td>${((result.english + result.maths + result.economics + result.computer + result.biology + result.chemistry)/6).toFixed(2)}</td>
        </tr>
    `;
   })
  .join(""); 