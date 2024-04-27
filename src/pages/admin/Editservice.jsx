import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import AdminFooter from '../../components/AdminFooter';
import ENV from '../../config.json';

const Editservice = () => {
    const { slug } = useParams();
    const [service, setService] = useState({
        title: '',
        description: '',
        short: '',
        image: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
    });
    const api = ENV.BASE_URL + 'services/';

    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get(`${api}${slug}`);
                setService(response.data);
            } catch (error) {
                console.log('Error fetching service:', error);
            }
        };

        fetchService();
    }, []); // Listen for changes in slug

    const handleChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value });
    };

    const handlePhoto = (e) => {
        setService({ ...service, image: e.target.files[0] });
    };

    const handleDescriptionChange = (event, editor) => {
        const data = editor.getData();
        setService({ ...service, description: data });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${api}${slug}`, service);
            setSuccessMessage('Service created successfully');
            setTimeout(() => {
                navigate('/admin/services');
            }, 2000);
        } catch (error) {
            console.log('Error updating service:', error);
        }
    };
    return (
        <div>
            <AdminHeader />
            <div className='container-fluid bg-light dashboard'>
                <div className="row">
                    <AdminSidebar />
                    <main className='col-md ms-sm-auto px-md-4'>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Edit Service</h1>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Title</label>
                                        <input type="text" className="form-control" name='title' value={service.title} onChange={handleChange} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description</label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            name='description'
                                            data={service.description}
                                            onChange={handleDescriptionChange}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Short description</label>
                                        <input type="text" className="form-control" name='short' value={service.short} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Image</label>
                                            <input type="file" className="form-control" name='image' accept='.png, .jpg, .jpeg' onChange={handlePhoto} />
                                        </div>
                                    </div>
                                    <hr />
                                    <h4>SEO meta tags</h4>
                                    <div className="form-group mb-3">
                                        <label>Meta Title</label>
                                        <input type="text" className="form-control" name='meta_title' value={service.meta_title} onChange={handleChange} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Meta Description</label>
                                        <input type="text" className="form-control" name='meta_description' value={service.meta_description} onChange={handleChange} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Meta Keywords</label>
                                        <input type="text" className="form-control" name='meta_keywords' value={service.meta_keywords} onChange={handleChange} />
                                    </div>
                                    <button type='submit' className="btn btn-success">Update</button>
                                </form>
                                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <AdminFooter />
        </div>
    )
}

export default Editservice