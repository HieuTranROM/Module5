import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as studentService from "../../service/StudentService";

function StudentEdit({ students, setStudents }) {
    const { id } = useParams();
    const student = students.find(s => s.id === parseInt(id));
    const navigate = useNavigate();

    const objectValid = {
        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự")
    };

    const updateStudent = async (value) => {
        const success = await studentService.updateStudent(value);
        if (success) {
            const updatedStudents = students.map(s => (s.id === value.id ? value : s));
            setStudents(updatedStudents);
            toast.success("Cập nhật thành công");
            navigate("/student");
        } else {
            toast.error("Cập nhật thất bại");
        }
    };

    return (
        <Formik
            initialValues={student}
            onSubmit={updateStudent}
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
                <button type="submit" className="btn btn-primary w-50 mx-auto d-block">Cập nhật</button>
            </Form>
        </Formik>
    );
}

export default StudentEdit;
