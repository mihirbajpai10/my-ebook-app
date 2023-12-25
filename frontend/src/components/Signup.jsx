import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  name: Yup.string().required('Name is required').min(3, 'Too Short'),
  password: Yup.string().required('Password is required').min(6, 'Too Short')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    )
});

const Signup = () => {

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''

    },

    onSubmit: async (values, {resetForm}) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if (res.status === 200) {
        resetForm();
        enqueueSnackbar('Registration Successful', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        });
        navigate('/login');

      } else {
        enqueueSnackbar('Registration Failed', {
          variant: 'Fail',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })

      }
    },
    validationSchema: SignupSchema
  });

  return (
    <div className='sign-in' >
      {/* <div class="bg-image"
        style="background-image: url('');
            height: 100vh">
      </div> */}
      <div className='col-md-3 mx-auto py-5'>
        <div className="card my-cardl my-5">
          <div className="card-body">
            <h2 className='text-center my-5'>SIGNUP FORM</h2>
            <form onSubmit={signupForm.handleSubmit}>
              <label>Full Name</label>
              <span className='error-label'>{signupForm.touched.name && signupForm.errors.name}</span>
              <input type="text" className="form-control mb-3" id='name' onChange={signupForm.handleChange} value={signupForm.values.name} />
              <label>Email</label>
              <span className='error-label'>{signupForm.touched.email && signupForm.errors.email}</span>
              <input type="text" className="form-control mb-3" id="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
              <label>Password</label>
              <span className='error-label'>{signupForm.touched.password && signupForm.errors.password}</span>
              <input type="password" className="form-control mb-3" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} />


              <button type='submit' className='btn btn-dark mt-3'>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup