/*
เครื่องหมาย Operator
+
_
*
/
% หารเอาเศษ
 */




/*
==
!=
>
<
>=
<=
*/

/*
and = &&  มีจริงกรีณจริง แค่กรีณเดียว คือ T && T = T ที่เหลือเป็น เท็ก
ro  = ||  มีเท็กกรีณเดียวคือ F || F = F ที่เหลือเป็น จริง
not = !
*/

/*
+=
-=
*=
/=
%=
 */

/*
*/


// การคิดตัวเลขต้องเรียงจาก ซ้าย ไแ ขวา
// เครืื่องหมายที่สูงสุด
// ()
// *,/,% ถ้าเท่ากัน ให้คิดเรียงจาก ซ้าย ไป ขวา
// +,-
// True , False
console.log(2+3*4) // 14
console.log(4%8)

console.log(2 == "2"); //True มันจะทำให้ชนิดของมูลเดียวกัน
console.log(2 === "2"); //False ครวใช้กรีณถ้าอยากให้มันถูกแบะตรงชนิดเดียวกันครวใช้ 3 อัน

// หัวข้อ if
if (2 == 2){
    console.log("Hello Ko")
};

let s = 55 , u = 4545;
if (s == u){
    console.log("Hello Ko")
}; // ถ้ามันเป็นเท็กจะไม่แสดงผลออกมา

let $s = 55 , _u = 4545;
if ($s == _u){
    console.log("Hello Ko")
};
if ($s <= _u){
    console.log("Ko Hello")
};

// ตัวอย่างเท็กหรือจริง
// การใช้เครื่องไหม ! อันนี้บงไปด้านหน้าตัวแปร ตรง console.log ก็จะเปลี่ยนเป็น เท็กหรือจริงกันตรงข้ามกับเท็กหรือจริงๆนั้นๆ
let op = true;
    console.log(!op) 