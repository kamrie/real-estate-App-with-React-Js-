import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import PropertyCard from '../Components/PropertyCard'
import { listings } from '../data/listings'

function Home() {
  const [searchType, setSearchType] = useState('sale')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredListings = listings.filter((property) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'For Sale') return property.badge === 'For Sale'
    if (activeFilter === 'For Rent') return property.badge === 'For Rent'
    if (activeFilter === 'Land') return property.type === 'land'
    if (activeFilter === 'Hot Deals') return property.badge === 'Hot Deal'
    return true
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-500 py-20 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Centered Content */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Find Your Perfect Home in Nigeria
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-12">
              Search over 10,000+ properties across Lagos, Abuja and beyond
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-4xl mx-auto">
              {/* Mobile Layout */}
              <div className="sm:hidden flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Search by city, area or property type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 text-sm text-slate-700 placeholder-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
                />
                <div className="flex gap-3">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-slate-200 transition"
                  >
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                  </select>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg transition hover:bg-blue-700 active:bg-blue-800 flex-shrink-0">
                    <FaSearch className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:flex gap-3 bg-white rounded-full p-3 shadow-lg">
                <input
                  type="text"
                  placeholder="Search by city, area or property type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 text-sm text-slate-700 placeholder-slate-500 bg-transparent focus:outline-none"
                />
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-slate-200 transition"
                >
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
                <button className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full transition hover:bg-blue-700 active:bg-blue-800">
                  <FaSearch className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Featured Listings</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Explore top properties near you</h2>
          </div>
          <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition">View All</a>
        </div>

        {/* Filter Pills */}
        <div className="mb-8 flex flex-wrap gap-3">
          {['All', 'For Sale', 'For Rent', 'Land', 'Hot Deals'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Listings Grid: Before mapping over listings, filter array based on */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredListings.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </section>
    </div>
  ) 
}

export default Home
