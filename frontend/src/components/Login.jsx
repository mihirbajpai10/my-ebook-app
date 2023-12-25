import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import useAppContext from '../AppContext';


const Login = () => {

  const navigate = useNavigate();

  const { setLoggedIn } = useAppContext();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status === 200) {

        const data = await res.json();

        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);

        enqueueSnackbar('Login Success', {
          variant: 'success',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        })
      } else if (res.status === 401) {
        enqueueSnackbar('Email or Password is incorrect', {
          variant: 'error',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        })
      } else {
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        })
      }

    }

  })


  return (
    <div className='log-in'>
      <div className='col-md-3 mx-auto py-5'>
        <div className="card my-cardl my-5">
          <div className="card-body">
            <h2 className='text-center my-5'>Login FORM</h2>
            <form onSubmit={loginForm.handleSubmit} >

              <label>Email</label>
              <input type="text" className="form-control mb-3" id="email" onChange={loginForm.handleChange} value={loginForm.values.email} />
              <label>Password</label>

              <input type="password" className="form-control mb-3" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} />

              <>
                <input type="checkbox" /> Remember me
              </>



              <div className='link '>
                <Link to='/signup'>Don't have an account</Link>
              </div>
              <button type='submit' className='btn btn-primary mt-3'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login