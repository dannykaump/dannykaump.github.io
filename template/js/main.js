const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's

const fif = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)

  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}` )

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest

const oldToYoung = inventors.sort((a, b) => a.year < b.year ? 1 : -1)

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?

const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);

  // 5. Sort the inventors by years lived

const sortedByYears = inventors.sort((a, b) => (a.passed - a.year) < (b.passed - b.year) ? 1 : -1)

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name

const sortByName = people.sort()

  // 8. Reduce Exercise
  // Sum up the instances of each of these

  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
 
  const dataSum = data.reduce((sum, x) => (sum + x.length), 0);


  // TASKS
  //camelize

const camelize = (str) => str.split('-').map((x, i) => i === 0 ? x : x[0].toUpperCase() + x.slice(1)).join('')

//filter

const filterRange = (arr, a, b) => arr.filter(x => (a <= x && x <= b));

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); 

alert( arr );

//filter range in place

//sort descending

let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

//copy and sort array

function copySorted(arr) {
  return arr.slice().sort();
}


let sorted = copySorted(arr);

//map to names

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(x => x.name);

let namesAndAges = users.map(x => `${x.name} is ${x.age} years old.`)

//sort by age
const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age);

let sortedByAge = sortByAge(users)

// shuffle array

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

// average age 
let getAverageAge = (list) => list.reduce((prev, user) => prev + user.age, 0) / list.length;

// find unique in array

function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

// create keyed obj from array

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

//