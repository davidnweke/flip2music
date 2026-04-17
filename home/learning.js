        // javascript function for time
        // const time = new Date().toLocaleTimeString();

        // Inserting the time inside the html
        // document.getElementById('time').textContent = time;

        // function updateTime() {
        //     const timeElement = document.getElementById('time');
        //     const now = new Date();
        //     const hours = now.getHours().toString().padStart(2, '0');
        //     const minutes = now.getMinutes().toString().padStart(2, '0');
        //     const seconds = now.getSeconds().toString().padStart(2, '0');
        //     const period = hours >= 12 ? 'PM' : 'AM'; 
        //     timeElement.textContent = `${hours}:${minutes}:${seconds} ${period}`;
        // }
        // setInterval(updateTime, 1000);
        // updateTime(); // Initial call to display time immediately

        // const value = updateTime();

        // CHECKING DATA TYPES IN JAVASCRIPT
        // let name = "Cyril";

        // const value = typeof name;
        // let age = 30;
        // let isStudent = true;
        // let phoneNumber = null;
        // let address = undefined;

        // Array
        // let numberOfStudents = [2, "phone2", "phone3", "phone4", "phone5", 2000];

        // Object 
        // let nameValue = {
        //     name: "Cyril",
        //     age: 30,
        //     city: "Ogun State"
        // }

        // CHECKING DATA TYPES IN JAVASCRIPT
        // const data = typeof nameValue;
        
        //getting a particular element from the array
        // let newArray = numberOfStudents[5];
        // let newObject = nameValue.age;

        // const number = "phone6";

        // const firstName = "Cyril";
        // const lastName = "Ogunleye";

        // jOINING STRINGS IN JAVASCRIPT USING PLUS SIGN
        // const fullName = firstName + " " + lastName + " " + "Badmus"; 

        // TEMPLATE LITERALS (using backticks and ${} to embed expressions in a string)
        // const fullName = `${firstName} ${lastName} Badmus}`;
        
        // JAVASCRIPT STRING METHODS: CHARACTER AT (getting a particular character from a string)
        // const newName = firstName.charAt(3)

        // JAVASCRIPT STRING METHODS: CONCAT (joining two or more strings together)
        // const newName = firstName.concat(" ", lastName, " ", "Badmus");

        // JAVASCRIPT STRING METHODS: INCLUDES (checking if a string contains a particular substring)
        // const food1 = `delish sharwama`
        // const food2 = "exclusive sharwama"
        // const food3 = 'Vanilla icecream'

        // const containFood = food3.includes("biscuit")

        // JAVASCRIPT STRING METHODS: STARTSWITH (checking if a string starts with a particular substring)
        // const food1 = `delish sharwama is the best food in the world`
        // const food2 = "exclusive sharwama"
        // const food3 = 'vanilla icecream'

        // const containFood = food3.startsWith("vanilla")

        // JAVASCRIPT STRING METHODS: ENDSWITH (checking if a string ends with a particular substring)
        // const food1 = `delish sharwama is the best food in the world`
        // const food2 = "exclusive sharwama is the best food in the world"
        // const food3 = 'vanilla icecream'

        // const containFood = food3.endsWith("cream")

        // JAVASCRIPT STRING METHODS: INDEXOF (getting the index of the first occurrence of a particular substring in a string)
        // const item = "delish sharwama is the best food in the world"

        // const whatIndex = item.indexOf("is")

        // JAVASCRIPT STRING METHODS: LASTINDEXOF (getting the index of the last occurrence of a particular substring in a string)
        // const item = "delish-in sharwama is the best food in the world in"

        // const whatIndex = item.lastIndexOf("in")


        // JAVASCRIPT STRING METHODS: UPPERCASE (converting a string to uppercase)
        // const item = "delish-in sharwama is the best food in the world in"

        // const value = item.toUpperCase();


        // JAVASCRIPT STRING METHODS: LOWERCASE (converting a string to lowercase)
        // const item = "delish-in Sharwama is the BEST food in the WORLD"

        // const value = item.toLowerCase();


        // JAVASCRIPT STRING METHODS: TRIM (removing whitespace from both ends of a string)
        // const name = `Cyril Ogunleye               Badmus`;

        // const value = name.trim(); // removing whitespace from both ends of the string
        // const value = name.trimStart(); // removing whitespace from the start of the string
        // const value = name.trimEnd(); // removing whitespace from the end of the string

        // JAVASCRIPT STRING METHODS: SCLICE (extracting a section of a string and returning it as a new string) 
        // const title = "The man with the heart of stone";
        // const money = title.slice(-5);

        //JAVASCRIPT STRING METHODS: SUBSTRING (extracting a section of a string and returning it as a new string)
        // const title = "The man with the heart of stone";
        // const value = title.substring(4, 7);

        //JAVASCRIPT STRING METHODS: SPLITING STRINGS INTO AN ARRAY (splitting a string into an array of substrings based on a specified separator)
        // const title = "The man with the heart of stone";
        // const value = title.split(" ")

        //JAVASCRIPT STRING METHODS: SPLITTING BY CHARACTER (splitting a string into an array of substrings based on a specified character)
        // const data = "9/3/2026";
        // const array = data.split("/");

        // JAVASCRIPT STRING METHODS: SPLITTING A WORD INTO AN ARRAY OF CHARACTERS (splitting a string into an array of individual characters)
        // const word = "Flip2Music";
        // const value = word.split("");

        // JAVASCRIPT STRING METHODS: REPLACE (replacing a specified value with another value in a string)
        // const name = "Cyril Etim";
        // const value = name.replace("Cyril Etim", "Robert Mustapha Obong");
    
        // JAVASCRIPT STRING METHODS: CHECKING LENGTH
        // const name = "Cyril Etim";
        // const checkLength = name.length
 
        //JAVASCRIPT STRING METHODS: REPLACEALL (replacing all occurrences of a specified value with another value in a string)
        // const title = "The man with the heart of stone met the man of God yesterday with the man";
        // const value = title.replaceAll("man", "woman");

        // const digit = `56`;
        // const convertDigit = Number(digit)
        // const digit2 = digit + 10
        // const convertValue = Number(digit)

        // const value = typeof convertValue

        // JAVASCRIPT STRING METHODS: PAD START
        // const number = "9"

        // const value = number.padStart(4, 0)

        // JAVASCRIPT STRING METHODS: PAD END
        // const number = "Hello"

        // const value = number.padEnd(8, "?")


        // JAVASCRIPT NUMBER METHODS: TO STRING (Converting number to string )
        // const digit = 650

        // const convertDigit = toString(digit)

        // const value = typeof convertDigit



        // JAVASCRIPT NUMBER METHODS: TO FIXED 
        // const number = 150.03

        // const value = number.toFixed(4)


        // JAVSCRIPT NUMBER METHODS: TO PRECISION
        // const number = 150.3450

        // const value = number.toPrecision(3)


        // JAVASCRIPT NUMBER METHODS: VALUE OF
        // const number = 340
        // const value = number.valueOf()


        
        // JAVASCRIPT NUMBER METHODS: NUMBER (Converting string to number )
        // const digit = 650

        // const convertDigit = Number(digit)

        // const value = typeof convertDigit


        // JAVASCRIPT NUMBER METHODS: PARSE INT
        // const digit = "45.54"

        // const convertDigit = parseInt(digit)

        // const value = typeof convertDigit


        // JAVASCRIPT NUMBER METHODS: PARSE FLOAT
        // const digit = "45.54"

        // const convertDigit = parseFloat(digit)

        // const value = typeof convertDigit


        // JAVASCRIPT NUMBER METHODS: CHECKING IF A NUMBER IS AN INTEGER
        // const digit = "45.54"

        // const digit2 = 459

        // const convertDigit = parseFloat(digit)

        // const integer = Number.isInteger(digit2)

        // const value = typeof convertDigit


        // JAVASCRIPT MATHS METHODS: ADDITION

        // const addNumber = 50 + 35


        // JAVASCRIPT MATHS METHODS: SUBTRACTION 

        // const minusNumber = 30 - 10


        // JAVASCRIPT MATHS METHODS: DIVISION

        // const divideNumber = 20 / 3


        // JAVASCRIPT MATHS METHODS: MULTIPLICATION

        // const multiplyNumber = 8 * 5


        // JAVASCRIPT MATHS METHODS: MODULUS

        // const remainderNumber = 15 % 4


        // JAVASCRIPT MATHS METHODS: EXPONENTIATION

        // const exp = 2 ** 5


        // JAVASCRIPT MATHS METHODS: ROUNDING A NUMBER

        // const roundNumber = Math.round(24.8)


        // JAVASCRIPT MATHS METHODS: CEILING A NUMBER

        // const ceilNumber = Math.ceil(10.3)


        // JAVASCRIPT MATHS METHODS: FLOOR A NUMBER

        // const floorNumber = Math.floor(31.49)


        // JAVASCRIPT MATHS METHODS: ABSOLUTE VALUE OF A NUMBER

        // const absNumber = Math.abs(-56)


        // JAVASCRIPT MATHS METHODS: SQUARE ROOT

        // const squareRoot = Math.sqrt(36)


        // JAVASCRIPT MATHS METHODS: POWER

        // const power = Math.pow(4, 3)


        // JAVASCRIPT MATHS METHODS: MINIMUM NUMBER

        // const minNumber = Math.min(4, 9, -7, 2, 0)


        // JAVASCRIPT MATHS METHODS: MAXIMUM NUMBER

        // const maxNumber = Math.max(5, 32, 1, 8, -100)

        
        // JAVASCRIPT MATHS METHODS: RANDOM NUMBER

        // const randomNumber = Math.floor(Math.random() * 1000000)


        // const prinicipal = 5000
        // const rate = 5
        // const time = 12

        // const interest = (prinicipal * rate * time) / 100

        // const repayment = `Your interest rate is: N${interest} and you will repay back: N${interest + prinicipal}`


        // const oldValue = 52
        // const newValue = 13

        // const change = (newValue - oldValue) * 100 / oldValue

        // const newchange = `Nigeria's economy decreased by ${Math.abs(change)}% between 2014 to 2026`

        
        
        // Ternary operator

        // const value = prompt("How old are you?")

        // const eligibility = (value >= 18) ? "You are allowed to visit the website" : "You are not allowed to visit"

        // const nationality = prompt("What country are you from?")

        // const age = prompt("How old are you?")

        // const retirementYear = prompt("When did you retire?")

        // const name = prompt("WHat is your name?")


        // const pension = (nationality === "Nigeria" && age >= 60 && retirementYear >= 2020) ?
        //                     `Hello ${name}, You are due for pension and your rate is N100,000` :
        //                 (nationality === "Nigeria" && age < 60 && retirementYear < 2020) ?
        //                     `Hello ${name}, You are a Nigerian, but you are not due for pension` :
        //                 (nationality !== "Nigeria" && age >= 60 && retirementYear >= 2020 ) ?
        //                     `Hello ${name}, You are not a Nigerian but you have retired` :
        //                     `Hello ${name}, You are not due for pension`

                        // (age >= 60 && age < 70)

                        
        // function Knife () {

        //     // const name = prompt("What is your name")

        //     // const subject = prompt("What is your subject")

        //     // const score = Number(prompt("what is your score"))
 
        //     // let number = Number(prompt("Type in your number"));

        //     let calculate;

        //     // ternary operator
        //     // const calculate = number === 20 ? 
        //     //                     `You are very correct` :
        //     //                   number === 50 ? 
        //     //                     `You are almost correct` :
        //     //                     `You are very wrong`

        //     // if else statement
        //     if (number === 20 ) {
        //         calculate = "You are very correct"
        //     } else if (number === 50) {
        //         calculate = `You are amost correct`
        //     } else {
        //         calculate = `You are very wrong`
        //     }


        //     return calculate;
        // }

        // const value = 760

        // const value2 = Knife (10)

        // const value3 = Knife (50)

        // const value4 = Knife ()

        // const jumia = {

        //     title: "Singleton Single Malt Scotch Whisky 15 Years Old Fruit Decadence 700ml",
        //     image: "https://images.unsplash.com/photo-1641935955033-9802fb38aff2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     price: 120983,
        //     productDetails: "Singleton 15 Years Old - Fruit Decadence is a premium single malt Scotch whisky that embodies the perfect balance of rich flavors and exquisite craftsmanship",
        //     quality: true,

        //     value: function () {
        //         return `This is a function`
        //     }
        // }

        // // const access2 = jumia["title"]
        
        // // modify object property
        // jumia.title = "A new title"

        // // add object property
        // jumia.location = "Lagos, Nigeria"

        // // delete object property
        // delete jumia.title
        
        // const access = jumia.value()

        // const firstStudent = {
        //     firstName: "Ade",
        //     lastName: "Badmus",
        //     age: 10,
        // }

        // const secondStudent = {
        //     firstName: "",
        //     lastName: "",
        //     age: 0,
        //     newStudent: true
        // }

        // const value = [20, "Welcome to Flip2Music", true, null, undefined, 
        //     [10, 5, 17], 
        //     {name: "Cyril", age: 30}
        // ]


        // value.push("This is a new value")

        // value.unshift("Where are you from?")

        // value.pop()

        // value.shift()

        // const newValue = value.length

        // const newValue = value.slice(0, 2)

        // const newValue = value.indexOf("Welcome to Flip2Music")

        // const newValue = value.fill("How are you?", 5, 7)

        // const firstArray = [10, "Hello", true,]
        // const secondArray = ["Welcome", "Goodbye"]

        // const newValue = firstArray.concat(secondArray)

        // const array = ["Ben", "Johnson"]


        // const newValue = array.join(" ")

        // const newValue = array.includes("Ola")

        // Normal function
        // function Update () {
        //     const time = new Date().toLocaleTimeString();
        //     return time;
        // } 

        // Arrow function
        // const Update = () => {
        //     const time = new Date().toLocaleTimeString();
        //     return time;
        // };


        // Writing an arrow function in one line
        // const calculate = (a, b) => a + b;

        // const array = [10, 20, 30, 40, 50]

        // const arr = "Welcome"

        // const result = array.filter((number) => number >= 30)

        const array = [
            {name: "Cyril", age: 30},
            {name: "Ade", age: 20},
            {name: "Tolu", age: 25},
            {name: "Bola", age: 30},
            {name: "Sola", age: 40},
            {name: "Kemi", age: 35},
            {name: "Titi", age: 30},
        ]

        // const result = array.every((each) => each === 30)
        // const result = array.some((each) => each === 30)

        const value = prompt("What is your age?")

        const result = array.filter((item) => item.age === parseInt(value)).map((item) => item.name);


        // const result = array.map((value) => value.name)

        // let totalAge = 0;

        // const value = array.forEach(element => {
        //     totalAge += element.age;

        // });

        // const result = totalAge

        // const result = array.reduce((obi, tinubu) => obi + tinubu.age, 0)

        // const arrayNumber = [110, 20, 130, 45, 5, 120]

        // const arrayString = ["Zebra", "Banana", "Apple", "Cherry", "Date", "Elderberry"]
        
        // sorting numbers in ascending order
        // const result = arrayNumber.sort((a, b) => a - b)

        // sortuing strings in alphabetical order
        // const result = arrayString.sort((a, b) => a.localeCompare(b))




    // const result = array.map((array) => `My number is ${array.name} and my age is ${array.age}`)








        // const result = array.map((result1) => result1.name)





        
 
        // const access = update();

        // document.getElementById('time').textContent = access; 
        document.getElementById('time').textContent = result; 
