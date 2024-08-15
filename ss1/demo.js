let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let i in arr) {
//     console.log(arr[i]);
// }
//
// for (let item of arr) {
//     console.log(item);
// }

// //Cu phap trc es6
// arr.forEach(function (value,index) {
//     console.log(value)
// })
//
// //Sau es6
// arr.forEach((value,index) => {
//     console.log(value)
// })

//Gấp đôi các phần tử trong mảng và trả về mảng mới
// const newArr = arr.map((value,index) => {
//     if (index % 2 !== 0) {
//         return value * 2;
//     } else {
//         return value;
//     }
// });
// console.log(newArr);

//lọc => filter
// const newArr3 = arr.filter((value,index) => index%2 !==0)
// console.log(newArr3);

//Reduce: dung cho truong hop co bien tich luy qua tung vong lap
// const sum = arr.reduce((temp,currentValue) => temp + currentValue)
// console.log(sum);

//Tìm số lớn nhất
// const max = arr.reduce((temp, currentValue) => {
//     return (currentValue > temp) ? currentValue : temp;
// });
// console.log(max);
