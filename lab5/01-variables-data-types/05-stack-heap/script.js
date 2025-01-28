/*let x = 23 , y = 23;
if(x <= y){
    console.log("tawan");
}*/

// ตั้งตัวแปร สามารถเขียนซ้ำกันได้ แต่ต้องมีการเปลี่ยนตัวใหญ่และตัวเล็ก
let Tawan
let tAwan
let taWan
let TawAn
// ไม่สามารเขียนซ้ำ kaywork ได้ คือห้ามเขียนตัวแปร แบบ คำสั่ง ถ้าอยากเขียนต้องเขียนตัวนี้ด้านหน้า 2 ตัว
let $for
let _for
let $5 // เขียนได้
let _5 // เขียนได้

// ทำตามอาจารย์
// การดูชนิดว่าเป็นชนิดอะไร
let _A = 1;
let _B = "23";
let _C = 2.3;
let bigNumder;
let _X = false;

console.log(_A , typeof _A);
console.log(_B , typeof _B);
console.log(_C , typeof _C);
console.log(bigNumder , typeof bigNumde);
console.log(_X , typeof _X);

// เขียนตัวแปรหลายๆตัวในบรรทัดเดียว
let _a = 134248790234459 , _b = 2353459203929402 , _c =4945433453543095;
console.log("_a , _b , _c");


//สามารถเปลี่ยนตัวแปรเดิมกายเป็นค่าหรือชนิดใหม่ได้ดังนี้
let A = 23;
A = 32;
console.log(A) //ค่่าที่แสดง ออกมาไม่ใช่ค่าเดิมแต่จะเป็นค่าใน ปัจจุบัน
// สามารถเขียนแบบได้ เปลี่ยนค่าระหว่างทาง
let gjg = 33 , ff = 44;
gjg = "tawan";
gig = 55;
gjg = gig+2;
console.log(gjg,ff);



//Arrya
let cat=["tawan","cartoon"];
console.log(cat , typeof cat);
// การเข้าถึงค่าของ Arrya ได้
const arr = [1,2,3,4,5];
console.log(arr[2])

arr.push(50);
console.log(arr);

const person = {
    name: 'Brad',
};
person.name = 'tawan';
person.email = 'tawan@gmail.com';
console.log(person);



//  การเปลี่ยนชนิด int --> sta =parseInt , sta --> int
// ข้อความ --> เลข
let amount = 'hello';
amount = parseInt(amount);
console.log(amount , typeof amount)

// เลข --> ข้อความ
let r = 2323;
let t = r.toString();
console.log(t , typeof t);

let k = 3423;
k = k.toString(); //ใช้แบบนี้ดีกว่า
console.log(k ,typeof k);

let y = 87978565644545832579874398578476835768573896759834768;
y = y.toString();
console.log(y , typeof y);

// ทิศนิยม --> เลข
let o = 64.53;
o = parseInt(o);
console.log(o ,typeof o);