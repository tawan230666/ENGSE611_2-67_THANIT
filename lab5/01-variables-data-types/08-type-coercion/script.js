console.log("djo");

let i = 0;
if(i>=0){
    console.log("Hello");
}

document.write("<h1>Hello</h1>");

// การเพิ่มค่าเข้าไปใน [] หรือ Array
let t = ["Hello"];
console.log(t);
t.push("Hello");
t.push("1");
t.push(1);
console.log(t, typeof t);
//  การเข้าถึง Array
console.log(t[2]);
console.log(t[3]-1);

// การบอกสมาชิกใน Array ใช้ .length
let c = ["1","2","3","4","5","6"];
console.log(c);
console.log("สมาชิก", c.length)

// ลบตำแหน่งสุดท้ายออกไปใน Array .pop ตัวแรกใช้​ .unshift
c.pop();
console.log(c);
console.log("สมาชิก", c.length)


