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
const fakeUsers = Array.from({ length: 3 }, generateFakeUser);

const select = (p: string, arr: any[]) => {
  switch (p) {
    case '*':
      return {
        where: (k: string, value: string) => {
          return arr.filter(obj => obj[k] === value)
        }
      };
    default:
      return {
        where: (k: string, value: string) => {
          return arr.filter((obj) => obj[k] === value).map((obj) => obj[p]);
        },
      };
  }
}


const filtered = select('*', fakeUsers).where('id', fakeUsers[0].id)
const filteredEmail = select('email', fakeUsers).where('id', fakeUsers[0].id);