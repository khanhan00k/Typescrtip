console.log("typescript");

let age: number = 25;
age = 30;

let myName: string = "hoadv";
myName = "20";

let dihockhong: boolean = true;
dihockhong = false;

let myYear = 2005;
// myYear = "20008"; => error

// object: chua nhieu thuoc tinh
const student: { name: string; age: number; isActive: boolean } = {
  name: "hoadv",
  age: 34,
  isActive: true,
};

// enum
enum status {
  done = "hoàn thành",
  doing = "đang làm",
}

// array: []: nhieu phan tu
const numbers: number[] = [1, 2, 3, 4];
const students: string[] = ["nam", "an"];
const products: { name: string }[] = [{ name: "laptop" }, { name: "laptop" }];

//any: ko qtam kieu du lieu, codejs
let data: any = "data";
data = 100;
//union: ket hop nhieu kieu du lieu
let result: string | number = "Farm Aura";
result = 6767;
//literal: chi nhan 1 gia tri
let dpSomething: "success" | "error" = "success";
