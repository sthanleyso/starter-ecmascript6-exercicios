// Exercise JavaScript ES6+ 01

class User {
  constructor(email, passwd) {
    this.email = email;
    this.passwd = passwd;
  }

  isAdmin() {
    return this.admin == true;
  }
}

class Admin extends User {
  constructor(email, passwd) {
    super(email, passwd);
    this.admin = true;
  }
}

const user1 = new User('user1@teste.com', 'pass123');
const adm1 = new Admin('adm1@teste.com', 'pass321');

console.log(user1.isAdmin());
console.log(adm1.isAdmin());
