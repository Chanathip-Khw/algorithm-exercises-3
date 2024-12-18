function findStudentIndex(students, searchStudent) {
  let index = -1
  for (i=0; i<students.length; i++) {
    if (students[i]===searchStudent) {
      index = i
    }
  }
  return index
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
     --> linear search เพราะ ข้อมูลไม่ได้เรียงตามตัวอักษร
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
     --> ข้อมูลไม่ได้เรียงตามตัวอักษร จึงใช้ binary serach ที่มี Big O Notation ที่ดีกว่าไม่ได้
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
     --> n เพราะ จำนวนรอบในการ search มากขึ้นตามจำนวนสมาชิกใน array 
*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
