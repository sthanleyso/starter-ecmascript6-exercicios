// Exercise JavaScript ES6+ 05

// 05.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x, y);

function sum(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2));

// 05.2
const user = {
  name: 'Diego',
  age: 23,
  address: { city: 'Rio do Sul', province: 'SC', country: 'Brasil' }
};

const user2 = {
  ...user,
  name: 'Gabriel'
};

const user3 = {
  ...user,
  address: {
    ...user.address,
    city: 'Lontras'
  }
};

console.log(user2, user3);
