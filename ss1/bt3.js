// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".

let arr = [1, 2, 3, 4, 5];
let V = 3;
let result = arr.includes(V) ? V : "không tìm thấy";
console.log(result);
