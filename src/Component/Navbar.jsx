import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinkStyle =
    "rounded-lg border border-transparent px-4 py-2 font-semibold text-gray-200 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.12)]"

  const mobileLinkStyle =
    "rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-gray-200 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"

  return (
    <nav className="sticky top-0 z-50 border-b border-amber-400/20 bg-[#101010]/95 shadow-[0_4px_25px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">

        {/* Portfolio title */}
        <Link
          to="/home"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-wide text-amber-400 transition duration-300 hover:text-amber-300 sm:text-3xl"
        >
          PORTFOLIO
        </Link>

        {/* Hamburger icon - mobile only */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="rounded-lg border border-amber-400/30 px-3 py-2 text-xl text-amber-400 transition hover:bg-amber-400/10 sm:hidden"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link className={navLinkStyle} to="/home">Home</Link>
          <Link className={navLinkStyle} to="/about">About</Link>
          <Link className={navLinkStyle} to="/project">Projects</Link>
          <Link className={navLinkStyle} to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 sm:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile sidebar */}
      {isOpen && (
        <aside className="fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm border-l border-amber-400/20 bg-[#151515] p-6 shadow-2xl sm:hidden">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-amber-400">Navigation</h2>

            <button
              type="button"
              aria-label="Close navigation menu"
              className="rounded-lg px-3 py-2 text-2xl text-gray-300 transition hover:bg-amber-400/10 hover:text-amber-400"
              onClick={closeMenu}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <Link className={mobileLinkStyle} to="/home" onClick={closeMenu}>Home</Link>
            <Link className={mobileLinkStyle} to="/about" onClick={closeMenu}>About</Link>
            <Link className={mobileLinkStyle} to="/project" onClick={closeMenu}>Projects</Link>
            <Link className={mobileLinkStyle} to="/contact" onClick={closeMenu}>Contact</Link>
          </div>

          <div className="mt-10 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Java &amp; MERN stack developer
          </p>
        </aside>
      )}
    </nav>
  )
}

export default Navbar