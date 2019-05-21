// Exercise JavaScript ES6+ 02

const users = [
  { name: 'Diego', age: 23, enterprise: 'Rocketseat' },
  { name: 'Gabriel', age: 15, enterprise: 'Rocketseat' },
  { name: 'Lucas', age: 30, enterprise: 'Facebook' }
];

const mapAges = users.map(user => user.age);
console.log(mapAges);

const filterUser = users.filter(user => user.enterprise == 'Rocketseat' && user.age > 18);
console.log(filterUser);

const findUser = users.find(user => user.enterprise == 'Google');
console.log(findUser);

const filterReduce = users
  .map(user => ({ ...user, age: user.age * 2 }))
  .filter(user => user.age <= 50);
console.log(filterReduce);
