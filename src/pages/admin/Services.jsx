import React, { useEffect, useState } from 'react';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import AdminFooter from '../../components/AdminFooter';
import axios from 'axios';
import ENV from '../../config.json'

const Services = () => {
    const [services, setservices] = useState([])
    const api = ENV.BASE_URL + 'services'

    useEffect(() => {
        const fetchservices = async () => {
            try {
                const response = await axios.get(api);
                setservices(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching service:" + error);
            }
        };

        fetchservices();
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
                            <h1 className="h2">Services list</h1>
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
                                {services.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.thumbnail}</td>
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

export default Services