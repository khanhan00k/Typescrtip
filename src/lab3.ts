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

// bai1
const averageScore = (...scores: number[]): number =>{
  const tong = scores.reduce((tong, diem)=> tong + diem, 0);
  return tong  / scores.length;
};
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

  