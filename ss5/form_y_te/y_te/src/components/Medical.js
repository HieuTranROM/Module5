import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';

function Medical() {
    const [formData, setFormData] = useState({
        name: '',
        cmnd: '',
        dob: '',
        gender: '',
        country: '',
        company: '',
        working: '',
        insurance: false,
        city: '',
        district: '',
        ward: '',
        house: '',
        phone: '',
        email: '',
        descrip: '',
        token: [],
        contact: []
    });

    const SEX_LIST = [
        { label: 'Nam', value: 'male' },
        { label: 'Nữ', value: 'female' }
    ];
    const TOKEN = [
        { label: 'Sốt', value: 'Sốt' },
        { label: 'Ho', value: 'Ho' },
        { label: 'Khó thở', value: 'Khó thở' },
        { label: 'Viêm phổi', value: 'Viêm phổi' },
        { label: 'Đau họng', value: 'Đau họng' },
        { label: 'Mệt mỏi', value: 'Mệt mỏi' }
    ];
    const CONTACT = [
        { label: 'Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19', value: 'Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19' },
        { label: 'Người từ nước có bệnh COVID-19', value: 'Người từ nước có bệnh COVID-19' },
        { label: 'Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)', value: 'Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)' },
    ];

    const objectValid = {
        name: Yup.string().required("Tên không được để trống"),
        cmnd: Yup.number().required("CMND không được để trống"),
        dob: Yup.number().required("Không được để trống ngày sinh").min(1900, "Năm sinh phải lớn hơn 1900"),
        country: Yup.string().required("Quốc gia không được để trống"),
        city: Yup.string().required("Tỉnh thành không được để trống"),
        district: Yup.string().required("Quận huyện không được để trống"),
        ward: Yup.string().required("Phường xã không được để trống"),
        house: Yup.string().required("Số nhà cụ thể không được để trống"),
        phone: Yup.string().required("Số điện thoại không được để trống"),
        email: Yup.string().required("Email không được để trống").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng")
    };

    const saveMedical = (values, { resetForm }) => {
        setFormData(values);
        toast.success("Thêm mới thành công");
        resetForm();
    };

    return (
        <div className="container mt-5">
            <Formik
                initialValues={formData}
                onSubmit={saveMedical}
                validationSchema={Yup.object(objectValid)}
            >
                <Form className="border p-4 rounded shadow">
                    <h2 className="text-center mb-4">Tờ khai y tế</h2>

                    <div className="mb-3">
                        <label className="form-label">Họ tên</label>
                        <Field name="name" className="form-control"/>
                        <ErrorMessage name="name" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Số hộ chiếu/CMND</label>
                        <Field name="cmnd" className="form-control"/>
                        <ErrorMessage name="cmnd" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Năm sinh</label>
                        <Field name="dob" type="number" className="form-control"/>
                        <ErrorMessage name="dob" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Giới tính</label>
                        <div>
                            {SEX_LIST.map((sex) => (
                                <div key={sex.value} className="form-check form-check-inline">
                                    <Field
                                        type="radio"
                                        name="gender"
                                        value={sex.value}
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">{sex.label}</label>
                                </div>
                            ))}
                        </div>
                        <ErrorMessage name="gender" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Quốc tịch</label>
                        <Field name="country" className="form-control"/>
                        <ErrorMessage name="country" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Công ty làm việc</label>
                        <Field name="company" className="form-control"/>
                        <ErrorMessage name="company" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Bộ phận làm việc</label>
                        <Field name="working" className="form-control"/>
                        <ErrorMessage name="working" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3 form-check">
                        <label className="form-check-label">Có thẻ bảo hiểm y tế</label>
                        <Field name="insurance" type="checkbox" className="form-check-input"/>
                        <ErrorMessage name="insurance" component="div" className="text-danger"/>
                    </div>

                    <h3 className="mb-4">Địa chỉ liên lạc tại Việt Nam</h3>

                    <div className="mb-3">
                        <label className="form-label">Tỉnh thành</label>
                        <Field name="city" className="form-control"/>
                        <ErrorMessage name="city" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Quận / huyện</label>
                        <Field name="district" className="form-control"/>
                        <ErrorMessage name="district" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phường / xã</label>
                        <Field name="ward" className="form-control"/>
                        <ErrorMessage name="ward" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Số nhà, phố, tổ dân phố / thôn / đội</label>
                        <Field name="house" className="form-control"/>
                        <ErrorMessage name="house" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Điện thoại</label>
                        <Field name="phone" className="form-control"/>
                        <ErrorMessage name="phone" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <Field name="email" className="form-control"/>
                        <ErrorMessage name="email" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <h5>Trong vòng 14 ngày qua, Anh/chị có đến quốc gia / vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h5>
                        <Field name="descrip" as="textarea" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <h5>Trong vòng 14 ngày qua, anh/chị có thấy xuất hiện dấu hiệu nào sau đây không</h5>
                        {TOKEN.map((item) => (
                            <div key={item.value} className="form-check">
                                <Field
                                    type="checkbox"
                                    name="token"
                                    value={item.value}
                                    className="form-check-input"
                                />
                                <label className="form-check-label">{item.label}</label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-3">
                        <h5>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với</h5>
                        {CONTACT.map((item) => (
                            <div key={item.value} className="form-check">
                                <Field
                                    type="checkbox"
                                    name="contact"
                                    value={item.value}
                                    className="form-check-input"
                                />
                                <label className="form-check-label">{item.label}</label>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>

            {formData && (
                <div className="mt-5 p-4 border rounded bg-light">
                    <h2>Thông tin đã lưu</h2>
                    <p><strong>Họ tên:</strong> {formData.name}</p>
                    <p><strong>Số hộ chiếu/CMND:</strong> {formData.cmnd}</p>
                    <p><strong>Năm sinh:</strong> {formData.dob}</p>
                    <p><strong>Giới tính:</strong> {formData.gender}</p>
                    <p><strong>Quốc tịch:</strong> {formData.country}</p>
                    <p><strong>Công ty làm việc:</strong> {formData.company}</p>
                    <p><strong>Bộ phận làm việc:</strong> {formData.working}</p>
                    <p><strong>Có thẻ bảo hiểm y tế:</strong> {formData.insurance ? "Có" : "Không"}</p>
                    <p><strong>Địa chỉ liên lạc tại Việt Nam:</strong></p>
                    <p><strong>Tỉnh thành:</strong> {formData.city}</p>
                    <p><strong>Quận / huyện:</strong> {formData.district}</p>
                    <p><strong>Phường / xã:</strong> {formData.ward}</p>
                    <p><strong>Số nhà, phố, tổ dân phố / thôn / đội:</strong> {formData.house}</p>
                    <p><strong>Điện thoại:</strong> {formData.phone}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Mô tả quốc gia / vùng lãnh thổ đã đến:</strong> {formData.descrip}</p>
                    <p><strong>Dấu hiệu xuất hiện:</strong> {formData.token ? formData.token.join(", ") : "Không có"}</p>
                    <p><strong>Tiếp xúc với:</strong> {formData.contact ? formData.contact.join(", ") : "Không có"}</p>
                </div>
            )}
        </div>
    );
}

export default Medical;
