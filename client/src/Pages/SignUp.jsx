import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function SignUp() {
   
  const [formData, setformData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('buyer');
  const navigate = useNavigate();

 


  const handleChange = (e) => {
      setformData(
        {
          ...formData,  //this spread operator helps keep the previous information while entering another one.
          [e.target.name  ]: e.target.value,

        });
  };
// ---------------------------------------------------------------
  const handleSubmit = async (e) => {
     e.preventDefault();     //prevents the page fromfreshing adter SUBMITTING 
     
     try {
            setLoading(true);

        
            const res = await fetch('/api/auth/signup',  {
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
                  navigate('/signIn')  //if everything is alright, navigate to the signin page
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
          <h1 className='text-3xl font-semibold text-slate-900'>Create your account</h1>
          <p className='mt-2 text-sm text-slate-500'>Join thousands of Nigerians finding their perfect property</p>
        </div>

        <div className='my-6 h-px bg-slate-200' />

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label htmlFor='username' className='sr-only'>Username</label>
            <div className='relative'>
              <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400'>
                <FaUser className='h-4 w-4' />
              </span>
              <input
                type='text'
                placeholder='Username'
                id='username'
                name='username'
                onChange={handleChange}
                className='w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100'
              />
            </div>
          </div>

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
                name='email'
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
                name='password'
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

          <div>
            <label htmlFor='confirmPassword' className='sr-only'>Confirm Password</label>
            <div className='relative'>
              <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400'>
                <FaLock className='h-4 w-4' />
              </span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm password'
                id='confirmPassword'
                name='confirmPassword'
                onChange={handleChange}
                className='w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-12 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100'
              />
              <button
                type='button'
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className='absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500'
              >
                {showConfirmPassword ? <FaEyeSlash className='h-4 w-4' /> : <FaEye className='h-4 w-4' />}
              </button>
            </div>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-2'>
            <div className='grid grid-cols-2 gap-2'>
              <button
                type='button'
                onClick={() => setSelectedRole('buyer')}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  selectedRole === 'buyer'
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                I&apos;m a Buyer
              </button>
              <button
                type='button'
                onClick={() => setSelectedRole('agent')}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  selectedRole === 'agent'
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                I&apos;m an Agent
              </button>
            </div>
          </div>

          {error && <p className='text-sm text-red-500'>{error}</p>}

          <button
            disabled={loading}
            className='w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50'
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>

        <p className='mt-6 text-center text-sm text-slate-500'>
          Already have an account?{' '}
          <Link to='/signIn' className='font-semibold text-blue-600 hover:text-blue-700'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp



    // const rootReducer = combinedReducer({user: userReducer})
    // const persistConfig = {
    //   key : "root",
    //   storage,
    //   version: 1,
    // }

    // const persistedReducer = persistReducer(persistConfig, rootReducer)