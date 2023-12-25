import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header>

        <div className="container py-5">

        

          <div className="row">
            <div className="col-md-6 py-5">
              <div>
                <h1 >"A word after a word after a word is power." – Margaret Atwood</h1>
                <p style={{ fontWeight: 'bold' }}>Join for FREE</p>
                <div className="input-group my-3">

                  <input type="email" placeholder='Email Address..' className="form-control" id='Email Address' />
                  <button type='button' className='btn btn-danger'>Get Started »</button>
                </div>
                <p className='text-center fw-bold'>OR</p>
                <button type='text' style={{ border: '1px solid black' }} className='container btn btn-transparent mt-3'><i class="fa-brands fa-google"></i>  Continue with Google </button>

              </div>
            </div>
            <div className="col-md-6 py-5">
              <img className='img-fluid' src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto,h_710/welcome/welcome-book-shelves_2x" alt="" />

            </div>
          </div>
        </div>
      </header>


      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className='img-fluid' src="https://image.slidesdocs.com/responsive-images/background/childrens-picture-book-reading-illustration-powerpoint-background_3c04b970fb__960_540.jpg" alt="" />
            </div>
            <div className="col-md-6 my-auto">
              <h1>Read the biggest and rare ebooks for FREE.</h1>
              <p>Each day you'll receive a new selection ebooks, from Bookhub to hidden gems.</p>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className='container col-md-3' >

          <div><img src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/right-arrow" alt="" /></div>

        </div>
      </section>



      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 my-auto'>
              <h1>Discover personalized ebooks.</h1>
              <p>Tell Bookhub what you like to read, and get handpicked deals that match your reading taste.</p>
            </div>
            <div className='col-md-6'>
              <img className='img-fluid' src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/ipad-library_2x" alt="" />
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className='container col-md-3'>
          <div><img src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/left-arrow" alt="" /></div>
        </div>
      </section>



      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img className='img-fluid' src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/kindle-ice-tea_2x" alt="" />
            </div>
            <div className="col-md-6 my-auto">
              <h1>Read your favorite ebooks from BookHub.</h1>
              <p>Read on any phone, tablet, Kindle, or other preferred device.</p>
              <button type='Getstarted' className='btn btn-transparent mt-3' style={{ border: '2px solid black' }}><i class="fa-brands fa-app-store"></i> <p>Get it on</p>Apple Book </button>
              <button type='Getstarted' className='btn btn-transparent mt-3' style={{ border: '2px solid black' }} ><i class="fa-brands fa-google-play"></i> <p>Get it on</p>Google Play </button>
              <img className='img-fluid' src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto,e_trim,w_400/welcome/kindle_logo " alt="" />
              <img className='img-fluid' src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto,e_trim,w_400/welcome/rakuten_kobo_logo" alt="" />
            </div>
          </div>
        </div>
      </section>

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
          <button className="btn btn-black" style={{color:'white', alignItems:''}}>🧡🤍💚INDIA</button>
          
          <h6 style={{ float: "right", marginRight: 20, fontSize: 15 }}>
          © 2023 BookBub. All rights reserved.
          </h6>
        </div>
      </footer>

    </div>
  )
}

export default Home