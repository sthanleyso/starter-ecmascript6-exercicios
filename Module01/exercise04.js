// Exercise JavaScript ES6+ 04

// 04.1
const enterprise = {
  name: 'Rocketseat',
  address: { city: 'Rio do Sul', province: 'SC' }
};

const {
  name,
  address: { city, province }
} = enterprise;

console.log(name, city, province);

// 04.2
function showInfo({ name, age }) {
  return `${name} tem ${age} anos.`;
}
console.log(showInfo({ name: 'Diego', age: 23 }));
