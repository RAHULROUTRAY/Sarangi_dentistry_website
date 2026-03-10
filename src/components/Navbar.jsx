import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-[color:rgb(128_200_138/0.35)] bg-[color:rgb(196_228_194/0.32)] backdrop-blur-xl shadow-[0_8px_30px_rgba(17,66,85,0.18)]">
      <div className="pointer-events-none absolute inset-0 border-b border-[color:rgb(153_198_57/0.35)] shadow-[inset_0_1px_0_rgba(245,249,235,0.45),inset_0_-1px_0_rgba(43,164,212,0.22)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl md:text-3xl font-bold text-[#011923] tracking-tight"
            >
              Sarangi <span className="text-[#1a627f]">Dentistry</span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative isolate overflow-hidden rounded-lg px-4 py-2.5 text-[#022431] hover:text-[#011923] font-mono font-semibold transition-colors duration-300 ${
                    isActive ? 'text-[#011923]' : ''
                  }`
                }
              >
                <span className="relative z-20">{item.name}</span>
                <span className="absolute left-4 right-4 bottom-1.5 z-20 h-0.5 bg-[#1a627f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                <span className="absolute inset-0 z-10 rounded-lg bg-[color:rgb(240_244_241/0.72)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#022431] p-2 rounded-lg hover:bg-[#dfe8ec] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-y-0 right-0 w-4/5 max-w-sm bg-[color:rgb(65_88_67/0.9)] backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-5 px-4 text-xl font-mono font-medium text-[#ebf4d7] hover:text-[#f5f9eb] border-b border-[#c0d2d8] transition-colors ${
                  isActive ? 'text-[#f5f9eb] border-[#1a627f]' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-[color:rgb(1_25_35/0.55)] backdrop-blur-s z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}

