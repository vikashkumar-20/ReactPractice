import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Dashboard () {
    return (
        <div>
           <h2>Dashboard Page</h2>
           <nav>
                <Link to="courses">Courses</Link> | 
                <Link to="mock-tests">Mock Tests</Link> | 
                <Link to="reports">Reports</Link>
            </nav>
    <Outlet /> 

        </div>
    )
}

export default Dashboard