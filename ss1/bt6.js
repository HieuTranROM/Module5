
// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
let arr = [1, 2, 3, 4, 5];
let [first,...rest] = arr;
console.log(first);
console.log(rest);

