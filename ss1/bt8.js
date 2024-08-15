
// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

function sum(...numbers) {
    return numbers.reduce((sum, number) => sum + number,0);
}
const arr=[1,2,3,4,5]
const check = sum(...arr);
console.log(check);


