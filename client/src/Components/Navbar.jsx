import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FaUser, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <header className="relative sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-baseline flex-shrink-0">
            <span className="text-xl font-bold text-slate-900">Car</span>
            <span className="text-xl font-bold text-blue-600">Land</span>
          </Link>

          {/* Hamburger button (mobile only) */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 sm:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
          </button>

          {/* Desktop nav (center) */}
          <div className="hidden flex-1 items-center justify-center gap-8 sm:flex">
            <Link to="/" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              About
            </Link>
            <Link to="/search" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Search
            </Link>
          </div>

          {/* Desktop right side */}
          <div className="hidden items-center gap-3 sm:flex flex-shrink-0">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-200"
                >
                  <FaUser className="h-4 w-4" />
                  {user?.username || 'Profile'}
                </button>
                {openProfile && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpenProfile(false)}
                    >
                      <FaTachometerAlt className="h-4 w-4" />
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 border-t border-slate-200"
                      onClick={() => setOpenProfile(false)}
                    >
                      <FaUser className="h-4 w-4" />
                      My Profile
                    </Link>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false)
                        setUser(null)
                        setOpenProfile(false)
                      }}
                      className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-t border-slate-200"
                    >
                      <FaSignOutAlt className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/signIn"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Sign In
                </Link>
                <Link
                  to="/signUp"
                  className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Post Property
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-slate-200 mt-4 pt-4 sm:hidden">
            <nav className="flex flex-col gap-2 mb-4">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 rounded-lg"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/search"
                className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Search
              </Link>
            </nav>

            {isLoggedIn ? (
              <div className="flex flex-col gap-1 border-t border-slate-200 pt-3">
                <p className="px-3 py-1 text-sm font-semibold text-slate-700">
                  {user?.username || 'User'}
                </p>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  <FaTachometerAlt className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  <FaUser className="h-4 w-4" />
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    setIsLoggedIn(false)
                    setUser(null)
                    setOpen(false)
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <FaSignOutAlt className="h-4 w-4" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 border-t border-slate-200 pt-3">
                <Link
                  to="/signIn"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signUp"
                  className="rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                  onClick={() => setOpen(false)}
                >
                  Post Property
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
