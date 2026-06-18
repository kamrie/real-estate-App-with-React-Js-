import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function SignIn() {
   
  const [formData, setformData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
      setformData(
        {
          ...formData,  //this spread operator helps keep the previous information while entering another one.
          [e.target.id]: e.target.value,
        });
  };

        console.log(formData)

// ---------------------------------------------------------------
  const handleSubmit = async (e) => {
     e.preventDefault();     //prevents the page fromfreshing adter SUBMITTING 
  
     try {
            setLoading(true);

            const res = await fetch('/api/auth/signin',  {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    },
                  body: JSON.stringify(formData),    
            });

                  const data = await res.json();
                  if(data.success === false) {
                    setLoading(false);
                    setError(data.message);
                    return;
                  }
                  setLoading(false)     //I set loading to false here because loading is completed.
                  setError(null)     //it will remove the error message.
                  navigate('/')  //if everything is alright, navigate to the signin page
                  console.log(data);
    } catch (error) {
              setLoading(false)
              setError(error.message)
    }
  };
    // console.log(formData)
// -----------------------------------------------------------------------------------------------------------------------
  return (
    <div className='min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10'>
      <div className='w-full max-w-md rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200'>
        <div className='text-center'>
          <p className='text-3xl font-bold'>Car<span className='text-blue-600'>Land</span></p>
          <h1 className='mt-4 text-3xl font-semibold text-slate-900'>Welcome back</h1>
          <p className='mt-2 text-sm text-slate-500'>Sign in to your account</p>
        </div>

        <div className='my-6 h-px bg-slate-200' />

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label htmlFor='email' className='sr-only'>Email</label>
            <div className='relative'>
              <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400'>
                <FaEnvelope className='h-4 w-4' />
              </span>
              <input
                type='email'
                placeholder='Email'
                id='email'
                onChange={handleChange}
                className='w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100'
              />
            </div>
          </div>

          <div>
            <label htmlFor='password' className='sr-only'>Password</label>
            <div className='relative'>
              <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400'>
                <FaLock className='h-4 w-4' />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                id='password'
                onChange={handleChange}
                className='w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-12 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100'
              />
              <button
                type='button'
                onClick={() => setShowPassword((prev) => !prev)}
                className='absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500'
              >
                {showPassword ? <FaEyeSlash className='h-4 w-4' /> : <FaEye className='h-4 w-4' />}
              </button>
            </div>
          </div>
          {error && <p className='text-sm text-red-500'>{error}</p>}

          <button
            disabled={loading}
            className='w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50'
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>

        <div className='my-6 flex items-center gap-3'>
          <div className='h-px flex-1 bg-slate-200' />
          <p className='text-xs uppercase tracking-[0.3em] text-slate-400'>or continue with</p>
          <div className='h-px flex-1 bg-slate-200' />
        </div>

        <button
          type='button'
          className='flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
        >
          <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600'>G</span>
          Continue with Google
        </button>

        <p className='mt-6 text-center text-sm text-slate-500'>
          Don&apos;t have an account?{' '}
          <Link to='/signUp' className='font-semibold text-blue-600 hover:text-blue-700'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
