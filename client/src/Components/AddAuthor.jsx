import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AddAuthor = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate();
    

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/author', {
            name
        })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))

    }


    return (
            <div className='container text-center'>
                <div className='row justify-content-md-center p-md-3'>
                    <h3 className='mb-3'>Add a new author</h3>
                    <span className='d-flex'><Link to={"/"} className="btn btn-secondary ms-4">back to Author List</Link></span>
                    <form onSubmit={submitHandler} action="" className='col-sm-6'>
                        <div className="mb-3">
                            <label for="Name" className="form-label">Name :</label>
                            <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)} placeholder="name of an author" />
                            {name && name.length<3 ? <div> *** Author name needs at least 3 characters long *** </div>:""}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to={"/"} className="btn btn-secondary ms-4">Cancle</Link>
                    </form>
                </div>
            </div>
    )
}

export default AddAuthor