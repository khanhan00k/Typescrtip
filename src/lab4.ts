//Class
class student {
    id: string;
    name: string;
    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }
    showStudent(){
        console.log(this.id, this.name);
        
    }
}
const sv1 = new student("Th05572", "Khánh An");
const sv2 = new student("Th05573", "Minh Tuấn");
sv1.showStudent();
sv2.showStudent();

//Interface
interface User {
    name: string;
    age: number;
}
const user1: User = {
    name: "Khánh An",
    age: 18
}
console.log(user1);

//Type
type UserType = {
    name: string;
    age: number;
}
const user2: UserType = {
    name: "Minh Tuấn",
    age: 20
}
console.log(user2);

//Bài Tập

//bai 1
class Students {
    id: string;
    name: string;
    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }
    showStudents(){
        console.log(this.id, this.name);
    }
}
const s1 = new Students("Th05572", "Khánh An");
s1.showStudents();

//bai 2
interface Student{
    id: string;
    email: string;
    phone: string;
}
const student1: Student = {
    id: "Th05572",
    email: "annkth05572@gmail.com",
    phone: "0335919904"
}
console.log(student1);

//bai 3
type ProductType = {
    id: string;
    name: string;
    price: number;
}
const product1: ProductType = {
    id: "P001",
    name: "Laptop",
    price: 15000000
}
console.log(product1);
