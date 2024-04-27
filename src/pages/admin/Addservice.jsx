import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import AdminFooter from '../../components/AdminFooter';
import ENV from '../../config.json';

const Addservice = () => {
    const api = ENV.BASE_URL + 'services/create';
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        short: '',
        image: null,
        thumbnail: null,
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoto = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            function slugify(title) {
                return title.toLowerCase().replace(/\s+/g, '-');
            }
            const form = new FormData();
            form.append('title', formData.title);
            form.append('description', formData.description);
            form.append('short', formData.short);
            form.append('image', formData.image);
            form.append('thumbnail', formData.thumbnail);
            form.append('slug', slugify(formData.title));
            form.append('meta_title', formData.meta_title);
            form.append('meta_description', formData.meta_description);
            form.append('meta_keywords', formData.meta_keywords);
            if (service.image) {
                formData.append('image', service.image);
            }
            if (service.thumbnail) {
                formData.append('thumbnail', service.thumbnail);
            }
            await axios.post(api, form);
            setSuccessMessage('Service created successfully');
            setTimeout(() => {
                navigate('/admin/services');
            }, 2000);
        } catch (error) {
            console.error('Error submitting service:', error);
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
                            <h1 className="h2">Add Service</h1>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                                    <div className="form-group mb-3">
                                        <label>Title</label>
                                        <input type="text" className="form-control" name='title' value={formData.title} onChange={handleChange} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Short description</label>
                                        <input type="text" className="form-control" name='short' value={formData.short} onChange={handleChange} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description</label>
                                        <CKEditor editor={ClassicEditor} name='description' data={formData.description} onChange={(event, editor) => { const data = editor.getData(); setFormData({ ...formData, description: data }); }} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Image</label>
                                                <input type="file" className="form-control" name='image' accept='.png, .jpg, .jpeg' onChange={handlePhoto} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Thumbnail</label>
                                                <input type="file" className="form-control" name='thumbnail' accept='.png, .jpg, .jpeg' onChange={handlePhoto} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <h4>SEO meta tags</h4>
                                    <div className="form-group mb-3">
                                        <label>Meta Title</label>
                                        <input type="text" className="form-control" name='meta_title' value={formData.meta_title} onChange={handleChange} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Meta description</label>
                                        <input type="text" className="form-control" name='meta_description' value={formData.meta_description} onChange={handleChange} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Meta keywords</label>
                                        <input type="text" className="form-control" name='meta_keywords' value={formData.meta_keywords} onChange={handleChange} />
                                    </div>
                                    <button type='submit' className="btn btn-success">Submit</button>
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

export default Addservice