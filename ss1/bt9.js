
// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.

function arr(...name) {
    const listName = name.join(', ');
    return `Welcome, ${listName}`;
}
console.log(arr("Hieu", "Ky", "Phong"));
