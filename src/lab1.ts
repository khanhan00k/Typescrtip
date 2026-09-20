// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
function chuvihcn(chieudai: number, chieurong: number) {
  return (chieudai + chieurong) * 2;
}

console.log(chuvihcn(6, 4));

function dientichhcn(chieudai: number, chieurong: number) {
    return chieudai * chieurong;
}
console.log(dientichhcn(6, 7));

//bai 2
function Tinhtong(...numbers: number[]): number {
  let tong = 0;
  for (let i=0; i <numbers.length; i++){
    tong += numbers[i];
  }
  return tong;
}
console.log(Tinhtong(3,5,3,2));

//bai 3
function demKytu(chuoi: string, KyTuCanDem: string): number {
let dem = 0;
for(let chuCai of chuoi){
  if(chuCai === KyTuCanDem){
    dem = dem + 1;
}
}
return dem;
} 
console.log(demKytu("Khanhan Bakhi", "a"));

//bai 4
function SoNguyenTo(n: number): boolean{
  if(n <2){
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}
console.log(SoNguyenTo(2));
console.log(SoNguyenTo(36));





