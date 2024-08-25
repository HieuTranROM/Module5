import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Form, Button, Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as studentService from "../../service/StudentService";

function StudentListFunction({ students, setStudents }) {
    const [name, setName] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        getAllStudents(name);
    }, [name]);

    const getAllStudents = async (name) => {
        let res = await studentService.getAllStudents(name);
        setStudents(res);
    }

    const deleteStudent = async (id) => {
        const success = await studentService.deleteStudent(id);
        if (success) {
            setStudents(students.filter(s => s.id !== id));
            toast.success('Xoá học sinh thành công');
            setShowModal(false);
        } else {
            toast.error('Xoá học sinh thất bại');
        }
    };

    const handleShow = (student) => {
        setSelectedStudent(student);
        setShowModal(true);
    };

    return (
        <>
            <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-3 w-50 mx-auto"
                placeholder="Search by name..."
            />
            <div className="container mt-4">
            <Link to={`/create`} className="btn btn-primary btn-sm mb-3">Create</Link>

            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Point</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {students
                    .filter(item => item.name.includes(name))
                    .map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.point}</td>
                            <td>
                                <Link to={`/edit/${item.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleShow(item)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xoá</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc muốn xoá học sinh {selectedStudent?.name} không?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Huỷ
                    </Button>
                    <Button variant="danger" onClick={() => deleteStudent(selectedStudent.id)}>
                        Xoá
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default StudentListFunction;
