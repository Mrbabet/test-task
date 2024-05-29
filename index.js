const employee = [
    {
      personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          city: 'Anytown',
          state: 'NY',
          postalCode: '12345',
        },
      },
    },
    {
      employmentDetails: {
        position: 'Software Engineer',
        department: 'Engineering',
        startDate: '2022-01-01',
        endDate: null,
        manager: {
          firstName: 'Alice',
          lastName: 'Smith',
          email: 'alice@example.com',
        },
      },
    },
  ];

  console.log(employee.hasOwnProperty("firstName"))

// Check key exsist in object
function getEmployeeInfo(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }
// If not we iterate all keys in object

  for (let k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null) {
        console.log(obj[k])
      let result = getEmployeeInfo(obj[k], key);
      if (result !== "Klucz nie istnieje") {
        return result;
      }
    }
  }

  return "Klucz nie istnieje";
}

console.log(getEmployeeInfo(employee, "firstName")); // Powinno zwrócić: "John"
console.log(getEmployeeInfo(employee, "lastName")); // Powinno zwrócić: "Doe"
console.log(getEmployeeInfo(employee, "position")); // Powinno zwrócić: "Software Engineer"
console.log(getEmployeeInfo(employee, "street")); // Powinno zwrócić: "Klucz nie istnieje"
 