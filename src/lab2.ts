enum ProductRate {
  low = "Thấp",
  medium = "Trung bình",
  high = "Cao"
}

type  Product = {
  name: string;
  sales: number;
  price: number;
  rate: ProductRate;
  descrition?: string;
};

const listProduct: Product[] = [
  {
    name: "Áo thun",
    sales: 100,
    price: 200000,
    rate: ProductRate.medium,
    descrition: "Áo thun nam nữ"
  },
  {
    name: "Quần jean",
    sales: 50,
    price: 300000,
    rate: ProductRate.high,
    descrition: "Quần jean nam nữ"

  },
  {
    name: "Giày thể thao",
    sales: 30,
    price: 500000,
    rate: ProductRate.low,
    descrition: "Giày thể thao"
  },
  {
    name: "Mũ lưỡi trai",
    sales: 80,
    price: 150000,
    rate: ProductRate.medium,
    descrition: "Mũ lưỡi trai"
  },
  {
    name: "Túi xách",
    sales: 20,
    price: 400000,
    rate: ProductRate.high,
    descrition: "Túi xách"
  }
];

function hienthi(listProduct: Product[]) {
 listProduct.forEach((product) => {
  console.log(`Tên sản phẩm: ${product.name}`);
  console.log(`Doanh số: ${product.sales}`);
  console.log(`Giá: ${product.price}`);
  console.log(`Đánh giá: ${product.rate}`);
 });
}

function Tinhtong(listProduct: Product[]){
  return listProduct.reduce((tong, product) => tong + product.price, 0);
}

function LocSp(listProduct: Product[]){
  return listProduct.filter((product)=>{
      return product.sales && product.rate !==  ProductRate.low;
  });
}

console.log("Danh Sach San Pham");
hienthi(listProduct);
console.log("Tổng: ", Tinhtong(listProduct));
console.log("Lọc: ", LocSp(listProduct));



