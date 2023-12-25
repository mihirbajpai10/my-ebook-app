import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Books = () => {

  const [bookList, setbookList] = useState([]);

  const fetchNovelData = async () => {
    const res = await fetch('http://localhost:5000/novel/getall');
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setbookList(data);
  };
  useEffect(() => {
    fetchNovelData();
  }, []);

  const displayNovelData = () => {
    return bookList.map((novel) => {
      return (

        <div className="containe py-5">
          <div className="card">
            <div className="card-body">
              <div className='row'>
                <div className="col-md-4">
                  <img height={400} src={'http://localhost:5000/' + novel.image} alt="" />
                </div>
                <div className="col-md-8 ">
                  <h1>{novel.title}</h1>
                  <h5>{novel.author}</h5>

                  <p>{novel.description}</p>
                  <p>{novel.genre}</p>


                  <Link to={'/viewdetails/' + novel._id} className='btn btn-primary'> View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      )
    })
  }


  return (



    <div>

      <header className="bg-dark text-white">
        <div className="container py-5">
          <h1 className="text-center display-3 fw-bold page-title">
            Explore Books
          </h1>
          <h4 className="text-center sub-title">
            Find your next favorite book.
          </h4>
          <div className="input-group w-75 mt-5 m-auto search-input">
            <input
              placeholder="Search Here..."
              type="text"
              className="form-control"
            />
            <button className="btn btn-danger">
              <i className="fa-solid fa-magnifying-glass" /> Search
            </button>
          </div>
        </div>
      </header>


      <div className="container py-5">

        <div className="row">
          <div className="col-md-2">
            <div className="p-5">
              <h6>Categories:</h6>
              <p>
                <input type="checkbox" /> Horror
              </p>
              <p>
                <input type="checkbox" /> Action and Adventure
              </p>
              <p>
                <input type="checkbox" /> Children's
              </p>
              <p>
                <input type="checkbox" /> Crime Fiction
              </p>
              <p>
                <input type="checkbox" /> History
              </p>
              <p>
                <input type="checkbox" /> Humor
              </p>
              <p>
                <input type="checkbox" /> Religion and Spirituality
              </p>
              <p>
                <input type="checkbox" /> Science
              </p>
              <p>
                <input type="checkbox" /> Science Fiction
              </p>
              <p>
                <input type="checkbox" /> Supernatural Suspense
              </p>
              <p>
                <input type="checkbox" /> Thrillers
              </p>
              <p>
                <input type="checkbox" /> Time Travel
              </p>
              <p>
                <input type="checkbox" /> True Crime
              </p>
            </div>
          </div>
          <div className="col-md-10">
            {displayNovelData()}
          </div>
        </div>
      </div>

      <footer className="bg-black text-white mt-5">
        <div className="details py-1" style={{ paddingLeft: 100 }}>
          <div className="row">
            <div className="col-md-3">
              <h4 style={{ fontSize: 20, fontWeight: 600, paddingTop: 50 }}>
                COMPANY
              </h4>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{
                  textDecoration: "none",
                  fontSize: 18,
                  fontWeight: 250,
                  paddingTop: 25
                }}
              >
                About
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Careers
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                For the Press
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Privacy Policy
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Terms of Service
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Contact us
              </a>
            </div>
            <div className="col-sm-3">
              <h4 style={{ fontSize: 20, fontWeight: 600, paddingTop: 50 }}>
                READERS
              </h4>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{
                  textDecoration: "none",
                  fontSize: 18,
                  fontWeight: 250,
                  paddingTop: 25
                }}
              >
                What Is BookHub?
              </a>

              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Connect with Friends
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Invite Your Friends
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Help
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                All Authors
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                All Books
              </a>
            </div>
            <div className="col-sm-3">
              <h4 style={{ fontSize: 20, fontWeight: 600, paddingTop: 50 }}>
                PUBLISHERS & AUTHORS
              </h4>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{
                  textDecoration: "none",
                  fontSize: 18,
                  fontWeight: 250,
                  paddingTop: 25
                }}
              >
                Company
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                {" "}
                Partners Overview
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Partner Dashboard
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Claim an Author Profile
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                BookBub Partners Blog
              </a>
              <a
                href=""
                className="text-white d-block my-2 no-underlinne"
                style={{ textDecoration: "none", fontSize: 18, fontWeight: 250 }}
              >
                Partner FAQ
              </a>

            </div>
            <div className="col-sm-3">
              <h5 style={{ fontSize: 20, fontWeight: 600, paddingTop: 50 }}>
                STAY UP TO DATE
              </h5>
              <div style={{ display: "flex" }}>
                <Link style={{ paddingTop: 30, paddingRight: 45, fontSize: 30, color: 'white' }}>
                  <i className="fa-brands fa-facebook" />
                  {/* <a href="" class="text-white no-underlinne">Facebook</a> */}
                </Link>
                <Link style={{ paddingTop: 30, paddingRight: 45, fontSize: 30, color: 'white' }}>
                  <i className="fa-brands fa-instagram" />
                  {/* <a href="" class="text-white no-underlinne">Instagram</a> */}
                </Link>
                <Link style={{ paddingTop: 30, paddingRight: 45, fontSize: 30, color: 'white' }}>
                  <i class="fa-brands fa-pinterest"></i>
                  {/* <a href="" class="text-white no-underlinne">Linkedin</a> */}
                </Link>
                <Link style={{ paddingTop: 30, paddingRight: 45, fontSize: 30, color: 'white' }}>
                  <i className="fa-brands fa-x-twitter" />
                  {/* <a href="" class="text-white no-underlinne">Twitter</a> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-1 text-center">
          <hr />
          <button className="btn btn-black" style={{ color: 'white', alignItems: '' }}>🧡🤍💚INDIA</button>

          <h6 style={{ float: "right", marginRight: 20, fontSize: 15 }}>
            © 2023 BookBub. All rights reserved.
          </h6>
        </div>
      </footer>
    </div>
  )
}

export default Books