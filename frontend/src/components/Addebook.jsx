import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Addebook = () => {


    const [selimg, setSelimg] = useState('');
    const [selFile, setSelFile] = useState('');

    const addebookForm = useFormik({
        initialValues: {
            title: '',
            description: '',
            image: '',
            author: '',
            year: '',
            publisher: '',
            genre: '',
            file: '',
        },

        onSubmit: async (values) => {
            values.image = selimg;
            values.file = selFile;
            console.log(values);

            const res = await fetch('http://localhost:5000/novel/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }

            });

            console.log(res.status);

        }
    });

    const uploadFile = async (e) => {
        const file = e.target.files[0];
        const formdata = new FormData();
        setSelFile(file.name);

        formdata.append('myfile', file);

        const res = await fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: formdata
        });

        console.log(res.status);
        if (res.status === 200) {
            toast.success('File uploaded successfully');
        }
    }

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const formdata = new FormData();
        setSelimg(file.name);

        formdata.append('myfile', file);

        const res = await fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: formdata
        });

        console.log(res.status);
        if (res.status === 200) {
            toast.success('File uploaded successfully');
        }
    }

    return (
        <div className='whole'>
            <div className='col-md-5 mx-auto py-5' >
                <div className="card my-card">
                    <div className="card-body">
                        <h3 className="text-center">Add New Novel Ebook</h3>
                        <form className='' onSubmit={addebookForm.handleSubmit}>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>Title:</label>
                                    <input className='form-control mb-4' type="text" onChange={addebookForm.handleChange} value={addebookForm.values.title} id="title" />

                                </div>

                                <div className="col-md-6">
                                    <label>Author</label>
                                    <input className='form-control mb-4' type="text" onChange={addebookForm.handleChange} value={addebookForm.values.author} id='author' />


                                </div>
                            </div>

                            <div className='row'>
                                <div className="col-md-6">
                                    <label>Year</label>
                                    <input className='form-control mb-4' type="number" onChange={addebookForm.handleChange} value={addebookForm.values.year} id='year' />
                                </div>

                                <div className="col-md-6">
                                    <label>Genre</label>
                                    <input className='form-control mb-4' type="text" onChange={addebookForm.handleChange} value={addebookForm.values.genre} id='genre' />
                                </div>

                            </div>

                            <label>Publisher</label>
                            <input className='form-control mb-4' type="text" onChange={addebookForm.handleChange} value={addebookForm.values.publisher} id='publisher' />


                            <div className="row">
                                <div className="col-md-6">
                                    <label>Image</label>
                                    <input className='form-control mb-4' type="file" onChange={uploadImage}/>
                                </div>
                                <div className="col-md-6">
                                    <label>File</label>
                                    <input className='form-control mb-4' type="file" onChange={uploadFile} />
                                </div>
                            </div>

                            <label>Description</label>
                            <textarea className='form-control mb-4' type="text" onChange={addebookForm.handleChange} value={addebookForm.values.description} id="description" ></textarea>
                            <button className='container btn btn-danger'>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Addebook