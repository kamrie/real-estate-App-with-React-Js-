import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { FaArrowLeft, FaCloudUploadAlt, FaCheckCircle } from 'react-icons/fa'

const AMENITIES = [
  '24hr Power', 'Borehole', 'Security',
  'Parking', 'CCTV', 'Tarred Road',
  'Swimming Pool', 'Gym', 'Fence'
]

export default function PostProperty() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    type: 'sale',
    propertyType: 'house',
    bedrooms: '',
    bathrooms: '',
    size: '',
    location: '',
    amenities: [],
    image: null
  })

  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleAmenityChange = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({ ...formData, image: file })
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      console.log(data)
      setLoading(false)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-slate-50'>

      <div className='max-w-3xl mx-auto px-4 py-10'>

        {/* Page Header */}
        <div className='mb-8'>
          <Link
            to='/dashboard'
            className='flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-4'
          >
            <FaArrowLeft className='h-3 w-3' />
            Back to Dashboard
          </Link>
          <h1 className='text-3xl font-bold text-slate-900'>Post a Property</h1>
          <p className='text-slate-500 mt-1'>
            Fill in the details below to list your property
          </p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>

          {/* SECTION 1 — Basic Information */}
          <div className='bg-white rounded-2xl shadow-sm p-6'>
            <h2 className='text-lg font-bold text-slate-900 mb-5'>
              Basic Information
            </h2>

            {/* Title */}
            <div className='mb-4'>
              <label className='block text-sm font-medium text-slate-700 mb-1'>
                Property Title
              </label>
              <input
                type='text'
                id='title'
                value={formData.title}
                onChange={handleChange}
                placeholder='e.g. 3 Bedroom Duplex in Lekki'
                className='w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
            </div>

            {/* Description */}
            <div className='mb-6'>
              <label className='block text-sm font-medium text-slate-700 mb-1'>
                Description
              </label>
              <textarea
                id='description'
                value={formData.description}
                onChange={handleChange}
                placeholder='Describe the property in detail — features, condition, nearby landmarks...'
                rows={4}
                className='w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                required
              />
            </div>

            {/* Toggles */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

              {/* Listing Type */}
              <div>
                <label className='block text-sm font-medium text-slate-700 mb-2'>
                  Listing Type
                </label>
                <div className='flex rounded-xl border border-slate-200 overflow-hidden'>
                  <button
                    type='button'
                    onClick={() => setFormData({ ...formData, type: 'sale' })}
                    className={`flex-1 py-2.5 text-sm font-semibold transition ${
                      formData.type === 'sale'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    For Sale
                  </button>
                  <button
                    type='button'
                    onClick={() => setFormData({ ...formData, type: 'rent' })}
                    className={`flex-1 py-2.5 text-sm font-semibold transition border-l border-slate-200 ${
                      formData.type === 'rent'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    For Rent
                  </button>
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className='block text-sm font-medium text-slate-700 mb-2'>
                  Property Type
                </label>
                <div className='flex rounded-xl border border-slate-200 overflow-hidden'>
                  <button
                    type='button'
                    onClick={() => setFormData({ ...formData, propertyType: 'house' })}
                    className={`flex-1 py-2.5 text-sm font-semibold transition ${
                      formData.propertyType === 'house'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    House
                  </button>
                  <button
                    type='button'
                    onClick={() => setFormData({ ...formData, propertyType: 'land' })}
                    className={`flex-1 py-2.5 text-sm font-semibold transition border-l border-slate-200 ${
                      formData.propertyType === 'land'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Land
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 2 — Property Details */}
          <div className='bg-white rounded-2xl shadow-sm p-6'>
            <h2 className='text-lg font-bold text-slate-900 mb-5'>
              Property Details
            </h2>

            {/* Price */}
            <div className='mb-4'>
              <label className='block text-sm font-medium text-slate-700 mb-1'>
                Price
              </label>
              <div className='flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500'>
                <span className='px-4 py-3 bg-slate-50 text-slate-500 text-sm border-r border-slate-200'>
                  ₦
                </span>
                <input
                  type='number'
                  id='price'
                  value={formData.price}
                  onChange={handleChange}
                  placeholder='e.g. 45000000'
                  className='flex-1 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none'
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div className='mb-4'>
              <label className='block text-sm font-medium text-slate-700 mb-1'>
                Location
              </label>
              <input
                type='text'
                id='location'
                value={formData.location}
                onChange={handleChange}
                placeholder='e.g. Lekki Phase 1, Lagos'
                className='w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
            </div>

            {/* Bedrooms and Bathrooms — house only */}
            {formData.propertyType === 'house' && (
              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block text-sm font-medium text-slate-700 mb-1'>
                    Bedrooms
                  </label>
                  <input
                    type='number'
                    id='bedrooms'
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder='e.g. 3'
                    min='1'
                    className='w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-slate-700 mb-1'>
                    Bathrooms
                  </label>
                  <input
                    type='number'
                    id='bathrooms'
                    value={formData.bathrooms}
                    onChange={handleChange}
                    placeholder='e.g. 2'
                    min='1'
                    className='w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
              </div>
            )}

            {/* Size */}
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1'>
                Size
              </label>
              <div className='flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500'>
                <input
                  type='number'
                  id='size'
                  value={formData.size}
                  onChange={handleChange}
                  placeholder='e.g. 180'
                  className='flex-1 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none'
                />
                <span className='px-4 py-3 bg-slate-50 text-slate-500 text-sm border-l border-slate-200'>
                  sqm
                </span>
              </div>
            </div>
          </div>

          {/* SECTION 3 — Amenities */}
          <div className='bg-white rounded-2xl shadow-sm p-6'>
            <h2 className='text-lg font-bold text-slate-900 mb-2'>
              Amenities
            </h2>
            <p className='text-sm text-slate-500 mb-5'>
              Select all that apply to this property
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
              {AMENITIES.map((amenity) => {
                const isSelected = formData.amenities.includes(amenity)
                return (
                  <button
                    key={amenity}
                    type='button'
                    onClick={() => handleAmenityChange(amenity)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {isSelected && <FaCheckCircle className='h-3.5 w-3.5 flex-shrink-0' />}
                    {amenity}
                  </button>
                )
              })}
            </div>
          </div>

          {/* SECTION 4 — Image Upload */}
          <div className='bg-white rounded-2xl shadow-sm p-6'>
            <h2 className='text-lg font-bold text-slate-900 mb-2'>
              Property Image
            </h2>
            <p className='text-sm text-slate-500 mb-5'>
              Upload a clear photo of the property
            </p>

            <label className='block cursor-pointer'>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='hidden'
              />
              {imagePreview ? (
                <div className='relative rounded-xl overflow-hidden h-56 border border-slate-200'>
                  <img
                    src={imagePreview}
                    alt='Property preview'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition'>
                    <p className='text-white text-sm font-semibold'>
                      Click to change image
                    </p>
                  </div>
                </div>
              ) : (
                <div className='border-2 border-dashed border-slate-200 rounded-xl h-56 flex flex-col items-center justify-center hover:border-blue-400 transition'>
                  <FaCloudUploadAlt className='text-4xl text-slate-300 mb-3' />
                  <p className='text-sm font-semibold text-slate-600'>
                    Click to upload property image
                  </p>
                  <p className='text-xs text-slate-400 mt-1'>
                    PNG, JPG up to 10MB
                  </p>
                </div>
              )}
            </label>
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={loading}
            className='w-full bg-blue-600 text-white py-4 rounded-2xl text-base font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? 'Posting...' : 'Post Listing'}
          </button>

          {error && (
            <p className='text-red-500 text-sm text-center'>{error}</p>
          )}

        </form>
      </div>
    </div>
  )
}
