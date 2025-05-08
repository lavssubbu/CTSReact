import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sampprops } from './Sampprops'
import { Counter } from './Counter'
import ListImages from './ListImages'
import FilterSamp from './FilterSamp'
import StudentList from './StudentList'
import TaskManager from './TaskManager'
import SearchSamp from './SearchSamp'

function App(){
   return (
    <>
      <h1>Welcome to react</h1>
      <Sampprops name="Anu" age={37}/>
      <SearchSamp/>
    </>)
}

const Add = (a, b) => a + b;

console.log(Add(3, 5));

const numbers = [1, 2, 3, 4];

// map()
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// filter()
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); 

// forEach()
numbers.forEach(n => console.log(n)); 

const greet = (name = "Guest") => {
  return `Hello, ${name}`;
};

console.log(greet());         
console.log(greet("John"));

const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3,4));

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); 

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };
console.log(updatedUser);

export default App
