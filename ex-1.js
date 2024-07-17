function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] === searchStudent) {
      return mid;
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(
  findStudentIndex(
    [
      "Andrew",
      "Bobby",
      "Diana",
      "George",
      "Hannah",
      "Isaac",
      "Jasmine",
      "John",
    ],
    "John"
  )
);

console.log(
  findStudentIndex(
    ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"],
    "Andrew"
  )
);

// ยังจำได้ไหมว่า Binary Search มี Big O เป็นเท่าไร เพราะอะไร ให้เขียนอธิบายใน comment แนบมาข้างใต้โค้ดตรงส่วนที่ระบุว่า “ตอบคำถามตรงนี้จ้า”
// ตอบคำถามตรงนี้จ้า
// Answer: O(logN)
