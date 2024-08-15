// const sum = (b,c,...a) => {
//     console.log(a);
// }
//
// sum(1,2,3,4,5,6,7,7,8,5);

//Sao chep va gop mang (ES6) va doi tuong (ES7)
//sao chep va gan la 2 khai niem khac nhau
// let a = [1,2,3];
// let c = [4,5,6]
// let b = [...a,...c];
// console.log(a);
// console.log(b);
// console.log(a == b);

//Doi tuong
// const obj = {
//     id: 1,
//     name: 'HaiTT',
// }
//
// const obj2 = {
//     id: 2,
//     address: "Quang Nam",
// }
//
// const obj1 = {...obj,...obj2}
// console.log(obj1)
//id ghi de tu 1 thanh 2

//Tach mang (ES6), doi tuong (ES7)
const arr = [1, 2, 3, 4, 5];
const [a,b,...c] = arr;
console.log(a);
console.log(b);
console.log(c);
