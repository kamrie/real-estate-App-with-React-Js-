import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaHouse, FaCircleCheck, FaClock, FaComment, FaEye, FaMapPin, FaEllipsisVertical } from 'react-icons/fa6';

const agentListings = [
  {
    id: 1,
    title: "3 Bedroom Duplex",
    price: 45000000,
    type: "house",
    category: "For Sale",
    status: "active",
    location: "Lekki Phase 1, Lagos",
    views: 234,
    enquiries: 8,
    datePosted: "12 Jun 2025",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    id: 2,
    title: "600 SQM Bare Land",
    price: 55000000,
    type: "land",
    category: "For Sale",
    status: "active",
    location: "Maitama, Abuja",
    views: 189,
    enquiries: 5,
    datePosted: "18 Jun 2025",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400"
  },
  {
    id: 3,
    title: "2 Bedroom Flat",
    price: 2500000,
    type: "house",
    category: "For Rent",
    status: "pending",
    location: "Victoria Island, Lagos",
    views: 0,
    enquiries: 0,
    datePosted: "20 Jun 2025",
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400"
  },
  {
    id: 4,
    title: "1000 SQM Dry Land",
    price: 38000000,
    type: "land",
    category: "For Sale",
    status: "pending",
    location: "Lekki Phase 2, Lagos",
    views: 0,
    enquiries: 0,
    datePosted: "21 Jun 2025",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400"
  }
]

function Dashboard() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const activeCount = agentListings.filter(l => l.status === 'active').length;
  const pendingCount = agentListings.filter(l => l.status === 'pending').length;
  const totalEnquiries = agentListings.reduce((sum, l) => sum + l.enquiries, 0);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const formatPrice = (price) => {
    return '₦' + (price / 1000000).toFixed(1) + 'M';
  };

  if (agentListings.length === 0) {
    return (
      <div className='min-h-screen bg-slate-50'>
        <div className='pt-24 px-4 flex flex-col items-center justify-center min-h-[60vh]'>
          <FaHouse className='text-6xl text-slate-300 mb-6' />
          <h2 className='text-2xl font-bold text-slate-900'>No listings yet</h2>
          <p className='text-slate-500 mt-2 mb-6'>Start by adding your first property</p>
          <Link
            to='/listings/new'
            className='flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700'
          >
            <FaPlus className='h-4 w-4' />
            Add New Listing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-slate-50'>
      <div className='pt-24 px-4 pb-10'>
        <div className='max-w-6xl mx-auto'>

          {/* Header */}
          <div className='flex items-start justify-between mb-8'>
            <div>
              <h1 className='text-4xl font-bold text-slate-900'>My Dashboard</h1>
              <p className='text-slate-500 mt-1'>Manage your property listings</p>
            </div>
            <Link
              to='/listings/new'
              className='flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700'
            >
              <FaPlus className='h-4 w-4' />
              Add New Listing
            </Link>
          </div>

          {/* Stats Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
            <div className='bg-white rounded-2xl p-6 shadow-sm'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-slate-500 text-sm'>Total Listings</p>
                  <p className='text-3xl font-bold text-slate-900 mt-2'>{agentListings.length}</p>
                </div>
                <FaHouse className='text-2xl text-blue-600' />
              </div>
            </div>

            <div className='bg-white rounded-2xl p-6 shadow-sm'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-slate-500 text-sm'>Active Listings</p>
                  <p className='text-3xl font-bold text-slate-900 mt-2'>{activeCount}</p>
                </div>
                <FaCircleCheck className='text-2xl text-green-600' />
              </div>
            </div>

            <div className='bg-white rounded-2xl p-6 shadow-sm'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-slate-500 text-sm'>Pending Approval</p>
                  <p className='text-3xl font-bold text-slate-900 mt-2'>{pendingCount}</p>
                </div>
                <FaClock className='text-2xl text-yellow-600' />
              </div>
            </div>

            <div className='bg-white rounded-2xl p-6 shadow-sm'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-slate-500 text-sm'>Total Enquiries</p>
                  <p className='text-3xl font-bold text-slate-900 mt-2'>{totalEnquiries}</p>
                </div>
                <FaComment className='text-2xl text-purple-600' />
              </div>
            </div>
          </div>

          {/* Listings Section */}
          <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>
            <div className='px-6 py-4 border-b border-slate-200 flex items-center justify-between'>
              <h2 className='text-xl font-bold text-slate-900'>My Listings</h2>
              <p className='text-sm text-slate-500'>{agentListings.length} total</p>
            </div>

            <div className='divide-y divide-slate-200'>
              {agentListings.map((listing) => (
                <div key={listing.id} className='px-6 py-4 hover:bg-slate-50 transition flex items-center gap-4'>

                  {/* Image */}
                  <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className='w-24 h-24 rounded-xl object-cover flex-shrink-0'
                  />

                  {/* Middle Section */}
                  <div className='flex-1'>
                    <h3 className='font-bold text-slate-900'>{listing.title}</h3>
                    <div className='flex items-center gap-1 text-slate-500 text-sm mt-1'>
                      <FaMapPin className='h-3 w-3' />
                      {listing.location}
                    </div>
                    <p className='text-xs text-slate-400 mt-1'>{listing.datePosted}</p>
                    <div className='flex gap-2 mt-2'>
                      <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700'>
                        {listing.category}
                      </span>
                      <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 capitalize'>
                        {listing.type}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className='flex items-center gap-6 flex-shrink-0'>
                    <div className='text-center'>
                      <div className='flex items-center gap-1 text-slate-600 text-sm'>
                        <FaEye className='h-4 w-4' />
                        <span className='font-semibold'>{listing.views}</span>
                      </div>
                      <p className='text-xs text-slate-400'>views</p>
                    </div>
                    <div className='text-center'>
                      <div className='flex items-center gap-1 text-slate-600 text-sm'>
                        <FaComment className='h-4 w-4' />
                        <span className='font-semibold'>{listing.enquiries}</span>
                      </div>
                      <p className='text-xs text-slate-400'>enquiries</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className='text-right flex-shrink-0 mr-4'>
                    <p className='text-xl font-bold text-blue-600'>{formatPrice(listing.price)}</p>
                  </div>

                  {/* Status Badge */}
                  <div className='flex-shrink-0'>
                    {listing.status === 'active' ? (
                      <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700'>
                        Active
                      </span>
                    ) : (
                      <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700'>
                        Pending
                      </span>
                    )}
                  </div>

                  {/* Three dot menu */}
                  <div className='relative flex-shrink-0'>
                    <button
                      onClick={() => toggleMenu(listing.id)}
                      className='p-2 hover:bg-slate-200 rounded-lg transition'
                    >
                      <FaEllipsisVertical className='h-4 w-4 text-slate-600' />
                    </button>
                    {openMenuId === listing.id && (
                      <div className='absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg z-10'>
                        <button className='w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 text-sm'>
                          Edit
                        </button>
                        <button className='w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 text-sm'>
                          View
                        </button>
                        <button className='w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 text-sm border-t border-slate-200'>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
