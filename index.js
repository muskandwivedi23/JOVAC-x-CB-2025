// Step 1: Create an array of 20 people
const people = [
  { id: 1, name: "Alice", age: 25, gender: "female" },
  { id: 2, name: "Bob", age: 32, gender: "male" },
  { id: 3, name: "Charlie", age: 28, gender: "male" },
  { id: 4, name: "Diana", age: 45, gender: "female" },
  { id: 5, name: "Eva", age: 21, gender: "female" },
  { id: 6, name: "Frank", age: 37, gender: "male" },
  { id: 7, name: "Grace", age: 30, gender: "female" },
  { id: 8, name: "Henry", age: 29, gender: "male" },
  { id: 9, name: "Ivy", age: 26, gender: "female" },
  { id: 10, name: "Jack", age: 40, gender: "male" },
  { id: 11, name: "Kate", age: 31, gender: "female" },
  { id: 12, name: "Leo", age: 22, gender: "male" },
  { id: 13, name: "Mona", age: 27, gender: "female" },
  { id: 14, name: "Nate", age: 34, gender: "male" },
  { id: 15, name: "Olive", age: 38, gender: "female" },
  { id: 16, name: "Paul", age: 41, gender: "male" },
  { id: 17, name: "Quinn", age: 24, gender: "female" },
  { id: 18, name: "Ray", age: 35, gender: "male" },
  { id: 19, name: "Sara", age: 23, gender: "female" },
  { id: 20, name: "Tom", age: 36, gender: "male" },
];

// Step 2: Use map to get names of all people
const names = people.map(person => person.name);
console.log("Names of all people:", names);

// Step 3: Use reduce to get total age
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
console.log("Total age of all people:", totalAge);

// Step 4: Use filter to get people older than 30
const above30 = people.filter(person => person.age > 30);
console.log("People above age 30:", above30);