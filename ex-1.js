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

// ตอบคำถามตรงนี้จ้า
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
