import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AuthorsList = () => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch((err) => console.log(err))
    }, []);

    const deleteAuthor = id => {        
        console.log(id)
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res)
                setAuthors(authors.filter(author=> author._id !== id));
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='container'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Author</th>
                        <th scope="col">Action available</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        authors.map((author, i) => {
                            return (<tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`} className="me-3 btn btn-primary">Edit</Link>
                                    <Link onClick={()=>deleteAuthor(author._id)} className='btn btn-danger text-light'>Delete</Link>
                                </td>
                            </tr>)
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorsList