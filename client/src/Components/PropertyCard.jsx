import React from 'react'
import { Link } from 'react-router-dom'
import { FaBed, FaBath, FaMapMarkerAlt, FaRuler } from 'react-icons/fa'

const badgeStyles = {
  'For Sale': 'bg-emerald-500',
  'For Rent': 'bg-blue-600',
  'Hot Deal': 'bg-red-600',
}

export default function PropertyCard({ id, imageUrl, title, price, bedrooms, bathrooms, location, badge, type, size }) {
  const badgeClass = badgeStyles[badge] || 'bg-slate-500'

  const formattedPrice =
    typeof price === 'number'
      ? new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
          maximumFractionDigits: 0,
        }).format(price)
      : price || '' 

  return (
    <Link
      to={`/listings/${id}`}
      className="group block overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden rounded-t-3xl">
        <img src={imageUrl} alt={title} className="h-60 w-full object-cover transition duration-300 group-hover:scale-105" />
        <span className={`absolute left-4 top-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg ${badgeClass}`}>
          {badge}
        </span>
      </div>

      <div className="space-y-3 p-5">
           <span className="text-lg font-bold text-[#2563eb]">{formattedPrice}</span>
        <h3 className="max-w-full truncate text-base font-semibold text-slate-900">{title}</h3>
   {/* conditional statement */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          {type === 'land' ? (
            <>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <FaRuler className="h-4 w-4 text-slate-500" />
                <span>{size}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <FaMapMarkerAlt className="h-4 w-4 text-slate-500" />
                <span>{location}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <FaBed className="h-4 w-4 text-slate-500" />
                <span>{bedrooms} bd</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <FaBath className="h-4 w-4 text-slate-500" />
                <span>{bathrooms} ba</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <FaMapMarkerAlt className="h-4 w-4 text-slate-500" />
                <span>{location}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
