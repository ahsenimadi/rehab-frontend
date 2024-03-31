import React, { useEffect, useState } from 'react';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import AdminFooter from '../../components/AdminFooter';
import axios from 'axios';
import ENV from '../../config.json'

const Blogs = () => {
    const [blogs, setblogs] = useState([])
    const api = ENV.BASE_URL + 'blogs'

    useEffect(() => {
        const fetchblogs = async () => {
            try {
                const response = await axios.get(api);
                setblogs(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching blog:" + error);
            }
        };

        fetchblogs();
    }, []);
  return (
    <>
        <div>
            <AdminHeader />
            <div className="container-fluid bg-light dashboard">
                <div className="row">
                    <AdminSidebar />
                    <main className="col-md ms-sm-auto px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Blogs list</h1>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Posted date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.image}</td>
                                        <td>{item.posted_date}</td>
                                        <td>
                                            <a href="#" className="btn btn-info btn-sm me-1"><i class="fa fa-pencil"></i> Edit</a>
                                            <a href="#" className="btn btn-danger btn-sm me-1"><i class="fa fa-trash"></i> Delete</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
            <AdminFooter />
        </div>
    </>
  )
}

export default Blogs