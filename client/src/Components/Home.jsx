import React from 'react'
import { Link } from 'react-router-dom'
import AuthorsList from './AuthorsList'

const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='d-flex flex-column align-items-lg-start'>
                    <Link to={"/add"} className="btn btn-success ms-4 mt-3 ">Add an Author</Link>
                </div>
                <p className='ms-4'>We have quotes by:</p>
            </div>

            <AuthorsList />
        </div>
    )
}

export default Home