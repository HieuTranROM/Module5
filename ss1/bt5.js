// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.

let arr = [1, 2, 3, 4, 5];
const check = arr.reduce((temp,currentValue) =>{
    return temp > 3 ? temp : currentValue
});
console.log(check);