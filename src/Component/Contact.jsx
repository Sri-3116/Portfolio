import { useState } from "react"
import Navbar from "./Navbar"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setName("")
    setEmail("")
    setSubject("")
    setCategory("")
    setMessage("")
  }

  const inputStyle =
    "w-full rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30"

  const cardStyle =
    "flex items-center gap-4 rounded-xl border border-white/10 bg-[#171717] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-[0_8px_25px_rgba(251,191,36,0.08)]"

  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <Navbar />

      <main className="px-5 py-12 sm:py-16">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-2 text-sm text-amber-400">
            <i className="fa-solid fa-envelope mr-2"></i>
            Let's Talk
          </span>

          <h1 className="mt-5 mb-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Let's Work <span className="text-amber-400">Together</span>
          </h1>

          <p className="mx-auto max-w-xl leading-7 text-gray-400">
            Interested in working together? I'm open to career opportunities,
            project discussions, and professional collaborations in Java,
            Adobe Experience Manager (AEM), and web development. I'd love to
            hear from you.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-amber-400/30 px-3 py-1.5 text-xs text-amber-400">
              <i className="fa-solid fa-code mr-2"></i>
              Java &amp; Full Stack Developer
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300">
              Chennai, India
            </span>
          </div>
        </div>

        {/* Contact form */}
        <div className="mx-auto max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#171717] p-5 shadow-2xl shadow-black/20 sm:p-8"
          >
            <h2 className="mb-2 text-xl font-bold">
              Start a <span className="text-amber-400">Conversation</span>
            </h2>

            <p className="mb-6 text-sm leading-6 text-gray-400">
              Share a few details below, and let me know how I can help.
            </p>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Full Name <span className="text-amber-400">*</span>
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className={inputStyle}
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Email Address <span className="text-amber-400">*</span>
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className={inputStyle}
              />
            </div>

            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What would you like to discuss?"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Inquiry Type <span className="text-amber-400">*</span>
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className={inputStyle}
                >
                  <option value="" disabled>
                    Select an inquiry type
                  </option>
                  <option value="job">Career Opportunity</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">
                    Professional Collaboration
                  </option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 flex justify-between text-sm font-semibold text-gray-300">
                <span>
                  Your Message <span className="text-amber-400">*</span>
                </span>

                <span className="font-normal text-gray-500">
                  {message.length}/2000
                </span>
              </label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={2000}
                placeholder="Tell me about your opportunity, project, or inquiry..."
                required
                className={`${inputStyle} min-h-[140px] resize-y`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-amber-400 py-3 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]"
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>
              Submit Inquiry
            </button>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-xs text-gray-500">OR CONTACT ME DIRECTLY</span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <button
              type="button"
              onClick={() =>
                (window.location.href = "mailto:jayasrivignesh27@gmail.com")
              }
              className="w-full rounded-lg border border-amber-400/30 py-3 font-semibold text-amber-400 transition duration-300 hover:bg-amber-400/10"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              Send Me an Email
            </button>

            {submitted && (
              <p className="mt-4 text-center text-sm text-amber-400">
                Your form details were processed locally. To contact me, please
                use the email button above.
              </p>
            )}
          </form>
        </div>

        {/* Contact information */}
        <section className="mx-auto mt-10 max-w-6xl">
          <div className="mb-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Contact Details
            </p>

            <h2 className="text-2xl font-bold">
              Find Me <span className="text-amber-400">Online</span>
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Reach out by email or explore my professional profiles and projects.
            </p>
          </div>

          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="mailto:jayasrivignesh27@gmail.com"
              className={cardStyle}
            >
              <i className="fa-solid fa-envelope text-xl text-amber-400"></i>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Email Me
                </p>

                <p className="truncate font-semibold text-gray-200">
                  jayasrivignesh27@gmail.com
                </p>
              </div>

              <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-sm text-gray-500"></i>
            </a>

            <div className={cardStyle}>
              <i className="fa-solid fa-location-dot text-xl text-amber-400"></i>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Based In
                </p>

                <p className="font-semibold text-gray-200">
                  Chennai, India
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="rounded-xl border border-white/10 bg-[#171717] p-5 sm:p-6">
            <h2 className="mb-2 text-lg font-bold">
              Professional <span className="text-amber-400">Profiles</span>
            </h2>

            <p className="mb-5 text-sm text-gray-400">
              Explore my work, technical projects, and professional journey.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="https://github.com/Sri-3116"
                target="_blank"
                rel="noopener noreferrer"
                className={cardStyle}
              >
                <i className="fa-brands fa-github text-2xl text-amber-400"></i>

                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-gray-400">
                    Explore my code and projects
                  </p>
                </div>

                <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-sm text-gray-500"></i>
              </a>

              <a
                href="https://linkedin.com/in/jayasri-ravichandran-614067370"
                target="_blank"
                rel="noopener noreferrer"
                className={cardStyle}
              >
                <i className="fa-brands fa-linkedin text-2xl text-amber-400"></i>

                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-gray-400">
                    View my professional profile
                  </p>
                </div>

                <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-sm text-gray-500"></i>
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Thank you for visiting my portfolio. I look forward to connecting with you.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Contact
