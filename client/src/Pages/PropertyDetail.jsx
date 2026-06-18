import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { FaBed, FaBath, FaRuler, FaCar, FaMapMarkerAlt, FaCheck, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { listings } from '../data/listings'

export default function PropertyDetail() {
  const { id } = useParams()   //route parameter ie the id, was read with this
  const property = listings.find((item) => String(item.id) === String(id))

  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Property not found</h1>
          <p className="mt-3 text-slate-600">The property you are looking for does not exist.</p>
        </main>
      </div>
    )
  }

  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(property.price)

  const initials = property.agent.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <div className="min-h-screen bg-slate-50">

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="space-y-6">
            <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="h-80 w-full object-cover sm:h-[420px]"
                />
              </div>
              <div className="hidden flex-col gap-4 lg:flex">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={property.images[1]}
                    alt={`${property.title} secondary`}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={property.images[2]}
                    alt={`${property.title} tertiary`}
                    className="h-40 w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-3xl font-bold text-slate-900">{property.title}</p>
                    <p className="mt-2 text-3xl font-bold text-[#2563eb]">{formattedPrice}</p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <FaMapMarkerAlt className="h-4 w-4" />
                      {property.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
                    {property.badge}
                  </span>
                </div>

                <div className="h-px bg-slate-200" />

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {property.type === 'house' ? (
                    <>
                      <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                        <FaBed className="h-4 w-4 text-slate-500" />
                        {property.bedrooms} Bedrooms
                      </div>
                      <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                        <FaBath className="h-4 w-4 text-slate-500" />
                        {property.bathrooms} Bathrooms
                      </div>
                      <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                        <FaRuler className="h-4 w-4 text-slate-500" />
                        {property.size}
                      </div>
                      <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                        <FaCar className="h-4 w-4 text-slate-500" />
                        {property.parking} Parking
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                      <FaRuler className="h-4 w-4 text-slate-500" />
                      {property.size}
                    </div>
                  )}
                </div>

                <div className="h-px bg-slate-200" />

                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">About this property</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{property.description}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Amenities</h2>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {property.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700"
                        >
                          <FaCheck className="h-3.5 w-3.5 text-emerald-600" />
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:sticky lg:top-6">
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                    {initials}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{property.agent.name}</p>
                    <p className="text-sm text-slate-500">{property.agent.totalListings} listings</p>
                  </div>
                </div>
                {property.agent.verified && (
                  <div className="mt-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                    Verified Agent
                  </div>
                )}

                <div className="my-6 h-px bg-slate-200" />

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input
                    type="tel"
                    placeholder="08028263434"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows="4"
                    placeholder="I am interested in this property..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button className="mt-5 w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Send Message
                </button>
                <a 
                //   href={`tel:${property.agent.phone}`}
                  className="mt-3 w-full rounded-2xl border border-blue-600 bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 flex items-center justify-center gap-2">
                  <FaPhoneAlt className="h-4 w-4" />
                  Call Agent
                </a>
                <a 
                //    href={`https://wa.me/${property.agent.phone}`}
                   target='_blank'
                   className="mt-3 w-full rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 flex items-center justify-center gap-2">
                  <FaWhatsapp className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
