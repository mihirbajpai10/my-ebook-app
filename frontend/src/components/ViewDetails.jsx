import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewDetails = () => {

    const { id } = useParams();

    const [novelDetails, setnovelDetails] = useState(null);

    const fetchNovelData = async () => {
        const res = await fetch('http://localhost:5000/novel/getbyid/' + id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);

        setnovelDetails(data);
    }

    useEffect(() => {
        fetchNovelData();
    }, [])

    const displayNovelData = () => {
        if (novelDetails !== null) {
            return (
                
                    <div className="container py-5">
                        <div className='row mt-5'>
                            <div className="col-md-6">
                                <img height={600} src={'http://localhost:5000/' + novelDetails.image} alt="" />
                            </div>
                            <div className="col-md-6 my-auto">
                                <h1>{novelDetails.title}</h1>
                                <h5>{novelDetails.author}</h5>
                                <p>{novelDetails.year}</p>
                                <p>{novelDetails.description}</p>
                                <p>{novelDetails.genre}</p>
                                <p>{novelDetails.publisher}</p>

                                {/* <Link to={'/viewdetails/' + novel._id} className='btn btn-danger'> Read</Link> */}
                            </div>
                        </div>
                    </div>
                
            )
        }
    }

    return (


        <div className='container'>
            <div className='row'>
                {displayNovelData()}
            </div>
        </div>


    )
}

export default ViewDetails