const test = 'hi'

console.log(test)
import {faker} from '@faker-js/faker';
// Function to generate a fake user object
function generateFakeUser() {
  const id = faker.datatype.uuid();
  const name = faker.person.fullName();
  const email = faker.internet.email();

  return {
    id,
    name,
    email,
  };
}

// Generate an array of 10 fake user objects
const fakeUsers = Array.from({ length: 10 }, generateFakeUser);

// Print the array of fake users
console.log(fakeUsers);

Array.prototype.select = function(parameter) {
  switch (parameter) {
    case '*':
      return this;
      break;
    default:
      return this.map((base) => base[parameter])
  }
}

console.log(fakeUsers.select('id'))
