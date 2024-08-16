import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  // return (
  //     React.createElement("h1", {id : "C0324H1", className: "C0324H"}, "Xin chào")
  // );
  const id = "c0324h1"

    const students = [
        {
            id: 1,
            name: "HieuTBT",
            address: "Quảng Trị",
            point: 9
        },
        {
            id: 2,
            name: "ThanhCP",
            address: "Quảng Bình",
            point: 5
        },
        {
            id: 3,
            name: "QuangHN",
            address: "Hà Tĩnh",
            point: 2
        }
    ]

    const helloWorld = (name) => {
        alert(`Hello ${name}!`)
    }

  return (
      <>
        <h1 id= {id} className = "c0324h1" onclick={() => helloWorld("HaiTT")}></h1>
        <table>
          <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Address</th>
            <th>Point</th>
            <th>Type</th>
          </tr>
          </thead>
          <tbody>
          {
            students.map((item, index) =>
                <tr key={item.id}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.point}</td>
                    <td>{getGrade(item.point)}</td>
                </tr>
            )
          }
          </tbody>
        </table>
      </>
  )
}

function getGrade(point) {
    if (point >= 8) {
        return 'Giỏi';
    } else if (point >= 6.5) {
        return 'Khá';
    } else if (point >= 5) {
        return 'Trung bình';
    } else if (point >= 3.5) {
        return 'Yếu';
    } else {
        return 'Kém';
    }
}

export default App;
