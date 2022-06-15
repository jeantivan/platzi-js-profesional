function addTwoNumbers(a: number, b: number) {
  return a + b;
}

function createAdder(a: number): (number: number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = "Doe"): string {
  return `${firstName} ${lastName}`;
}

const jean = fullName("Jean");
