import './App.css';
import React, {useState, useEffect} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import StudentListFunction from "./component/student/StudentListFunction";
import StudentCreate from "./component/student/StudentCreate";
import StudentEdit from "./component/student/StudentEdit";
import * as studentService from "./service/StudentService";

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            let res = await studentService.getAllStudents("");
            setStudents(res);
        };
        fetchStudents();
    }, []);

    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                    <div className="container-fluid">
                        <NavLink to="/student" className="navbar-brand">Danh sách</NavLink>
                    </div>
                    <p>Tổng số học sinh hiện tại {students.length}</p>
                </nav>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/create" element={<StudentCreate students={students} setStudents={setStudents}/>} />
                        <Route path="/edit/:id" element={<StudentEdit students={students} setStudents={setStudents}/>} />
                        <Route path="/student" element={<StudentListFunction students={students} setStudents={setStudents}/>} />
                    </Routes>
                </div>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;
