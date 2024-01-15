const users = {
  'jdoe': 'password',
  'jane': '1234',
  'bob': 'asdf'
};

console.log(users.jdoe);
console.log(users['jdoe']);

let u = 'jdoe';
console.log(users[u]);

u = 'jane';
console.log(users[u]);

console.log(Object.keys(users));