const a: number = 23;
const b: boolean = false;
const c: string = "Muhammad Ahmed";

let d: string[];
let aliasD: Array<string>;

interface BasicUser<A = boolean> {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
}

interface BasicUser {
  account: number;
}

const user: BasicUser = {
  name: "Muhammad Ahmed",
  age: 23,
  isAdmin: false,
  surname: "Mughal",
  account: 100,
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
