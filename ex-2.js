function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let start = 0;
  let end = books.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (books[mid].title === searchTitle) {
      return mid;
    } else if (books[mid].title < searchTitle) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Gone with the Wind"));
console.log(findBookIndex(books, "The Master Mind"));
