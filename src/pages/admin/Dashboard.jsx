import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import AdminFooter from '../../components/AdminFooter'


const Dashboard = () => {
  return (
    <>
        <div>
            <AdminHeader />
            <div className="container-fluid bg-light dashboard">
                <div className="row">
                    <AdminSidebar />
                    <main className="col-md ms-sm-auto px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                        </div>
                        {/* Dashboard content goes here */}
                    </main>
                </div>
            </div>
            <AdminFooter />
        </div>
    </>
  )
}

export default Dashboard