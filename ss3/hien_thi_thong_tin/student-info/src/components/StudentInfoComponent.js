import {Component} from "react";

class StudentInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {id:1,name:"Phong",age:20,address:"Huế"},
                {id:2,name:"Kỳ",age:20,address:"Huế"},
                {id:3,name:"Hiếu",age:20,address:"Quảng Trị"},
                {id:4,name:"Thanh",age:20,address:"Quảng Bình"},
                {id:5,name:"Công",age:19,address:"Huệ"},

            ],
        };
    }

    render() {
        return (
            <>
                <div>
                    <h1 style={{textAlign: "left"}}>Student-Information</h1>
                    <table border="1" cellPadding="10" style={{margin: 'left'}}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.students.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default StudentInfoComponent;