const employee = {
  0: {
    info: {
      0: { name: "John" },
      1: { surname: "Doe" },
      2: { years: 30 },
      3: {
        address: {
          0: { city: "Anytown" },
          1: { state: "NY" },
          2: { postalCode: "12345" },
        },
      },
    },
  },
  1: {
    details: {
      0: { position: "Software Engineer" },
      1: { department: "Engineering" },
      2: { startDate: "2022-01-01" },
      3: { endDate: null },
      4: {
        manager: {
          0: { firstName: "Alice" },
          1: { lastName: "Smith" },
          2: { email: "alice@example.com" },
        },
      },
    },
  },
};

function getEmployeeInfo(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }

  for (let k in obj) {
    if (typeof obj[k] === "object" && obj[k] !== null) {
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
