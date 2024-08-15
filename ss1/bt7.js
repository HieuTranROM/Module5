
// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

const person = {
    name: "John",
    age: 35,
}
const check = {
    ...person,
}

console.log(check)