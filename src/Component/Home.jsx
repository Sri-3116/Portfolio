import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const roles = [
  "Java Developer",
  "Frontend Developer",
  "Full Stack Developer",
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(
        () => setText(currentRole.slice(0, text.length + 1)),
        100
      );
    } else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(currentRole.slice(0, text.length - 1)),
        45
      );
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const gold = "#FBBF24";

  const cardStyle = {
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(251,191,36,0.18)",
    transition: "all 300ms ease",
  };

  return (
    <div className="min-h-screen bg-[#101010] text-white overflow-hidden">
      <Navbar />

      {/* Subtle gold background glow */}
      <div className="fixed top-20 left-0 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-yellow-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-24">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-[fadeInUp_0.8s_ease-out_both]">
            <p className="text-amber-400 font-semibold tracking-[0.25em] uppercase mb-4 text-sm">
              Welcome to My Digital World
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Jayasri Ravichandran
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-5 text-gray-200 min-h-[3rem]">
              <span className="text-amber-400">{text}</span>
              <span className="inline-block w-[3px] h-7 bg-amber-400 ml-1 align-middle animate-pulse" />
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-8 mt-6 max-w-xl">
              Junior Java Developer with 1+ years of professional
              experience at Sutrix Group. My resume highlights Java,
              HTML, CSS, and Adobe Experience Manager (AEM) 6.5,
              including reusable components, Sling Models, HTL,
              OSGi services, and CMS workflows.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/project"
                className="px-6 py-3 rounded-lg bg-amber-400 text-black hover:bg-amber-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/20 transition duration-300 font-semibold"
              >
                View My Work <span className="ml-2">→</span>
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-gray-600 hover:border-amber-400 hover:text-amber-400 hover:-translate-y-1 transition duration-300 font-semibold"
              >
                Contact Me
              </Link>

              <a
                href="/Jayasri___Java_Developer.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 transition duration-300 font-semibold"
              >
                View Resume ↓
              </a>
            </div>

            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/Sri-3116"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:-translate-y-1 transition duration-300"
              >
                <i className="fa-brands fa-github text-xl" />
              </a>

              <a
                href="https://linkedin.com/in/jayasri-ravichandran-614067370"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:-translate-y-1 transition duration-300"
              >
                <i className="fa-brands fa-linkedin-in text-xl" />
              </a>

              <a
                href="mailto:jayasrivignesh27@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:-translate-y-1 transition duration-300"
              >
                <i className="fa-regular fa-envelope text-xl" />
              </a>
            </div>
          </div>

          {/* Decorative technology graphic — no profile photo */}
          <div className="relative flex items-center justify-center h-[400px] animate-[fadeIn_1.2s_ease-out_both]">
            <div className="absolute w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full" />

            <div className="absolute w-[330px] h-[330px] rounded-full border border-amber-400/20 animate-[spin_45s_linear_infinite]" />
            <div className="absolute w-[250px] h-[250px] rounded-full border border-yellow-200/15 animate-[spin_30s_linear_infinite_reverse]" />

            <div className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-700/10 border border-amber-400/40 flex flex-col items-center justify-center shadow-2xl shadow-amber-500/10 animate-[float_4s_ease-in-out_infinite]">
              <i className="fa-solid fa-code text-4xl text-amber-300" />
              <p className="mt-3 text-sm font-semibold text-gray-200">
                Java &amp; frontend
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Mern Stack Developer
              </p>
            </div>

            {[
              { icon: "fa-brands fa-java", label: "Java", pos: "top-5 left-1/2 -translate-x-1/2" },
              { icon: "fa-solid fa-layer-group", label: "AEM", pos: "top-1/2 right-0 -translate-y-1/2" },
              { icon: "fa-brands fa-js", label: "JS", pos: "bottom-5 left-1/2 -translate-x-1/2" },
              { icon: "fa-brands fa-html5", label: "HTML", pos: "top-1/2 left-0 -translate-y-1/2" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`absolute ${item.pos} z-20 w-14 h-14 rounded-2xl bg-[#191919] border border-amber-400/30 flex items-center justify-center shadow-lg text-amber-300 hover:scale-110 hover:border-amber-300 transition duration-300 animate-[fadeInUp_0.7s_ease-out_both]`}
                style={{ animationDelay: `${index * 150}ms` }}
                title={item.label}
              >
                <i className={`${item.icon} text-2xl`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
            Professional Experience
          </h2>

          <div className="p-7 md:p-9 rounded-2xl" style={cardStyle}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <h3 className="text-xl font-bold">
                Junior Java Developer
              </h3>
              <span className="text-amber-300 text-sm">
                August 2022 – August 2023
              </span>
            </div>
            <p className="text-gray-300 mt-2">Sutrix Group</p>
            <p className="text-gray-400 leading-7 mt-4">
              Experience with Java development and AEM 6.5 CMS,
              including HTL, Sling Models, OSGi services, JCR,
              CRXDE Lite, editable templates, dialogs, ClientLibs,
              and author-publish workflows.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
            Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Programming & Web", skills: "Java, JavaScript (ES6+), HTML5, CSS3" },
              { title: "Adobe Experience Manager", skills: "AEM 6.5, HTL, Sling Models, OSGi, JCR, CRXDE Lite" },
              { title: "Frontend", skills: "React.js, Vite, Tailwind CSS, Axios" },
              { title: "Backend & Database", skills: "Node.js, Express.js, REST APIs, MongoDB, Mongoose" },
              { title: "Authentication & Email", skills: "JWT, Nodemailer" },
              { title: "Tools", skills: "Git, GitHub, Vercel, Claude AI" },
            ].map((group, index) => (
              <div
                key={group.title}
                className="p-6 rounded-2xl hover:-translate-y-1 hover:border-amber-400/50 transition duration-300"
                style={{
                  ...cardStyle,
                  animation: "fadeInUp 0.7s ease-out both",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-lg font-bold text-amber-300">
                  {group.title}
                </h3>
                <p className="text-gray-400 leading-7 mt-3">
                  {group.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
            Education
          </h2>

          <div className="p-7 rounded-2xl" style={cardStyle}>
            <h3 className="text-xl font-bold">
              B.E. Electronics and Communication Engineering
            </h3>
            <p className="text-gray-300 mt-2">
              St. Peter’s College of Engineering, Avadi, Chennai
            </p>
            <p className="text-amber-300 mt-2">2017 – 2021</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-12 lg:px-20 py-20" id="contact">
        <div className="max-w-5xl mx-auto text-center rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/10 to-transparent p-9 md:p-14">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Let’s Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Interested in connecting about Java development, AEM,
            or web development opportunities? Feel free to contact me.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-8 px-7 py-3 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 hover:-translate-y-1 transition duration-300">
            Email Me <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
