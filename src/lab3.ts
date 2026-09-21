// function
function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(5, 6)); 

function Aura(name: string) {
  return name + " Bá Khí " ;
}
console.log(Aura("Khánh An")); 

function HiBaKhi(name: string): void {
  console.log("Xin chào " + name);
}
HiBaKhi("Khánh An ba khí");

// arrow function
const sum2 = (a: number, b: number) => a + b;
console.log(sum2(3, 6));

// arrow function with default parameter
const sayHelloSkibidi = (user = "Khanh An")=>{
    return user;
};
console.log(sayHelloSkibidi());
console.log(sayHelloSkibidi("Skibidi"));

//ontional parameter
const sayHelloPerson = (name?: string) => {
  return name;
}
console.log(sayHelloPerson());

const creatUser = (name: string, age?: number) => {
  return `Tên: ${name}, Tuổi: ${age}`;
}
console.log(creatUser("Skibidi", 67));
//...vô hạn tham số

const callSkibidi = (...skibidi: number[])=>{
  console.log(skibidi);
}
 callSkibidi(67,6,7);

 const arr1 = [1,2,3,4,5];
 const arr2 = [6,7,8,9,10];
 const arr3 = [...arr1, ...arr2];
 console.log(arr3);

 const name = ["Khanh An"];
 const age = [18];
 const aura = ["Bá Khí"];
 const user = [...name, ...age, ...aura];
 console.log(user);
 
//Bai tập
// bai1
function averageScore(...scores: number[]): number {
  const tong = scores.reduce((tong, diem) => tong + diem, 0);
  return tong / scores.length;
}
console.log(averageScore(10,7,9,7));

//bai 2
type ChanLe = (n: number) => string;
const check: ChanLe = (n: number) =>{
  if(n % 2 === 0){
    return "Số chẵn";
  }
  return "Số lẻ";
}
console.log(check(2));
console.log(check(3));

//bai 3
function Users(name: string, age: number): string{
  return `Tên: ${name}, Tuổi: ${age}`;
}
console.log(Users("Khánh An", 18));

//bai 4
const Apple = ["Iphone 18", "Macbook Pro 2024", "Ipad Pro 2024"];
const Samsung = ["Samsung Galaxy S24", "Samsung Galaxy Tab S9", "Samsung Galaxy Book3"];
const mergeProducts = [...Apple, ...Samsung];
console.log(mergeProducts);
