// Exercise JavaScript ES6+ 03

// 03.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 03.2
const user = { name: 'Diego', age: 23 };
const showAge = user => user.age;

console.log(showAge(user));

// 03.3
const name = 'Diego';
const age = 23;

const showUser = (name='Diego', age=18) => ({ name, age });

console.log(showUser(name, age));

// 03.4
const promise = () => new Promise((resolve, reject) => resolve());
