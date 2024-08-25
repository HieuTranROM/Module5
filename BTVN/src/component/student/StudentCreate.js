import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as studentService from "../../service/StudentService";

function StudentCreate({ students, setStudents }) {
    const [form, setForm] = useState({
        name: "",
        address: "",
        point: 0
    });
    const navigate = useNavigate();

    const objectValid = {
        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự")
    };

    const saveStudent = async (value) => {
        value.point = +value.point
        const success = await studentService.saveStudent(value);
        if (success) {
            setStudents([...students, value]);
            toast.success("Thêm mới thành công");
            navigate("/student");
        } else {
            toast.error("Thêm mới thất bại");
        }
    };

    return (
        <Formik
            initialValues={form}
            onSubmit={saveStudent}
            validationSchema={Yup.object(objectValid)}
        >
            <Form className="form-horizontal p-4 bg-light border rounded mx-auto" style={{ maxWidth: "400px" }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <Field name="name" className="form-control"/>
                    <ErrorMessage name="name" component="p" className="text-danger"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <Field name="address" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="point" className="form-label">Point:</label>
                    <Field name="point" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary w-50 mx-auto d-block">Lưu</button>
            </Form>
        </Formik>
    );
}

export default StudentCreate;
