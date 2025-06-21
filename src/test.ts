let a: number = 23;
let b: boolean = false;
let c: string = "Muhammad Ahmed";

interface BasicUser {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
}

const user: BasicUser = {
  name: "Muhammad Ahmed",
  age: 23,
  isAdmin: false,
  surname: "Mughal",
};

interface userWithPermission extends BasicUser {
  permissions: string[];
}

const PermittedUser: userWithPermission = {
  name: "Muhammad Ahmed",
  age: 23,
  isAdmin: false,
  surname: "Mughal",
  permissions: ["Read", "Update"],
};

type MathFunc = (a: number, b: number) => number;

const multiplication: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;
