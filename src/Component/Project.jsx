import React, { useState } from "react";
import Navbar from "./Navbar";

function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "An online shopping website featuring product browsing and a responsive interface, built to explore the core concepts of e-commerce development.",
      category: "Full Stack",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      type: "MERN",
      icon: "fa-solid fa-cart-shopping",
      gradient: "from-amber-400 to-yellow-600",
      github: "https://github.com/Sri-3116/Ecommerce-Project1-VJIO",
      demo: "https://sri-3116.github.io/Ecommerce-Project1-VJIO/",
    },
    {
      title: "Dynamic Image Gallery",
      description:
        "A dynamic image gallery with an organized visual layout, designed to make browsing images simple, engaging, and responsive across devices.",
      category: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      type: "Frontend",
      icon: "fa-solid fa-images",
      gradient: "from-amber-400 to-yellow-600",
      github: "https://github.com/Sri-3116/Dynamic-image-gallery",
      demo: "https://dynamic-image-gallery-gdtr.vercel.app/",
    },
    {
      title: "Counter Application",
      description:
        "A lightweight interactive counter that demonstrates state updates, user interactions, and the fundamentals of building dynamic React interfaces.",
      category: "React",
      technologies: ["React", "JavaScript", "CSS"],
      type: "React",
      icon: "fa-solid fa-calculator",
      gradient: "from-amber-400 to-yellow-600",
      github: "https://github.com/Sri-3116/Counter-Application.git",
      demo: "https://counter-application-react-8894.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A weather application that connects with a weather API to retrieve and present weather information through a user-friendly interface.",
      category: "Frontend",
      technologies: ["React", "JavaScript", "Axios", "Weather API"],
      type: "Frontend",
      icon: "fa-solid fa-cloud-sun",
      gradient: "from-amber-400 to-yellow-600",
      github: "https://github.com/Sri-3116/weather-app.git",
      demo: "https://weather-app-react-8894.vercel.app/",
    },
    {
      title: "Favorite Student List",
      description:
        "A React-based application for organizing and displaying favorite students, with interactive components for managing the displayed list.",
      category: "React",
      technologies: ["React", "JavaScript", "Context API"],
      type: "React",
      icon: "fa-solid fa-users",
      gradient: "from-amber-400 to-yellow-600",
      github: "https://github.com/Sri-3116/Fav-Student-List.git",
      demo: "https://fav-student-list-nu.vercel.app/",
    },
    {
      title: "Random Number Generator",
      description:
        "An interactive number generator that responds to user actions and demonstrates random number generation and event handling.",
      category: "React",
      technologies: ["React", "JavaScript", "CSS"],
      type: "React",
      icon: "fa-solid fa-dice",
      gradient: "from-amber-400 to-yellow-600",
      github: "https://github.com/Sri-3116/Random-Number-Generate.git",
      demo: "https://random-number-generate-coral.vercel.app/",
    },
    {
      title: "FLIXUP Clone",
      description:
        "A movie and entertainment-inspired web interface focused on presenting content through an engaging layout and a modern visual design.",
      category: "Frontend",
      technologies: ["React", "JavaScript", "CSS"],
      type: "React",
      icon: "fa-solid fa-film",
      gradient: "from-amber-400 to-yellow-600",
      github: "https://github.com/Sri-3116/FLIXUP-CLONE.git",
      demo: "https://flixup-clone.vercel.app/",
    },
    {
      title: "Bulk Mail App",
      description:
        "A full-stack email management application that supports sending messages to multiple recipients and importing recipient information from Excel files.",
      category: "Full Stack",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Nodemailer",
        "JWT",
        "Axios",
      ],
      type: "MERN",
      icon: "fa-solid fa-envelopes-bulk",
      gradient: "from-amber-400 to-yellow-600",
      github: "https://github.com/Sri-3116/Bulk-Mail-App.git",
      demo: "https://frontend-react-8894.vercel.app/history",
    },
    {
      title: "Registration Form",
      description:
        "A responsive registration form with structured input fields, designed to practice form layouts, user input handling, and validation.",
      category: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      type: "Frontend",
      icon: "fa-solid fa-user-plus",
      gradient: "from-amber-400 to-yellow-600",
      github: "https://github.com/Sri-3116/Registration-form",
      demo: "https://sri-3116.github.io/Registration-form/",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.type))),
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      category === "All" || project.type === category;

    const searchText = search.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(searchText)
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#101010] px-5 py-16 text-white sm:px-8 lg:px-12">
        {/* Background glow */}
        <div className="pointer-events-none fixed left-1/2 top-0 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium tracking-widest text-amber-400">
              <i className="fa-solid fa-code"></i>
              SELECTED WORK
            </div>

            <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="mx-auto max-w-xl text-sm leading-6 text-neutral-400 sm:text-base">
              Explore a selection of my web development projects, showcasing
              my work with frontend interfaces, React applications, and
              full-stack development.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mx-auto mb-6 max-w-2xl">
            <div className="flex items-center rounded-xl border border-neutral-800 bg-[#171717] px-4 py-3 shadow-lg shadow-black/20">
              <i className="fa-solid fa-magnifying-glass mr-3 text-sm text-neutral-500"></i>

              <input
                type="text"
                placeholder="Find a project or technology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="ml-2 text-neutral-500 transition hover:text-amber-400"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </div>

          {/* FILTERS */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-lg border px-4 py-2 text-xs font-medium transition duration-300 ${category === item
                    ? "border-amber-400/40 bg-amber-400/10 text-amber-400"
                    : "border-neutral-800 bg-[#171717] text-neutral-400 hover:border-amber-400/30 hover:text-amber-300"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PROJECT COUNT */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-neutral-500">
              Projects found:{" "}
              <span className="font-semibold text-amber-400">
                {filteredProjects.length}
              </span>
            </p>

            <div className="hidden items-center gap-2 text-xs text-neutral-500 sm:flex">
              <i className="fa-solid fa-layer-group text-amber-400"></i>
              Ideas brought to life
            </div>
          </div>

          {/* PROJECT GRID */}
          {filteredProjects.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="group overflow-hidden rounded-xl border border-neutral-800 bg-[#171717] transition duration-500 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-950/20"
                >
                  {/* PROJECT PREVIEW */}
                  <div className="relative m-2 h-48 overflow-hidden rounded-lg bg-[#111111]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15 transition duration-500 group-hover:opacity-25`}
                    ></div>

                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "25px 25px",
                      }}
                    ></div>

                    {/* TYPE */}
                    <div className="absolute left-3 top-3">
                      <span className="rounded-md border border-neutral-700 bg-[#171717]/90 px-2 py-1 text-[10px] text-neutral-300 backdrop-blur">
                        {project.type}
                      </span>
                    </div>

                    {/* LABEL */}
                    <div className="absolute right-3 top-3">
                      <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 text-[10px] text-amber-300">
                        <i className="fa-solid fa-code mr-1"></i>
                        Featured Project
                      </span>
                    </div>

                    {/* ICON */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-2`}
                      >
                        <i className={`${project.icon} text-3xl text-[#171717]`}></i>
                      </div>
                    </div>

                    {/* NUMBER */}
                    <div className="absolute bottom-3 right-3 text-xs font-semibold text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="px-5 pb-5 pt-3">
                    <h2 className="mb-2 text-lg font-semibold text-white transition group-hover:text-amber-400">
                      {project.title}
                    </h2>

                    <p className="mb-4 line-clamp-3 text-xs leading-5 text-neutral-400">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-neutral-800 bg-[#202020] px-2 py-1 text-[10px] text-neutral-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* LINKS — URLS PRESERVED */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-[#202020] px-3 py-2.5 text-xs font-medium text-neutral-300 transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
                      >
                        <i className="fa-brands fa-github"></i>
                        GitHub
                      </a>

                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-400 px-3 py-2.5 text-xs font-semibold text-black transition hover:bg-amber-300"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          Live Demo
                        </a>
                      ) : (
                        <span
                          title="No live demo available"
                          className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-neutral-800 px-3 py-2.5 text-xs font-medium text-neutral-500"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          Demo Unavailable
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-neutral-800 bg-[#171717] px-5 py-16 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10 text-amber-400">
                <i className="fa-solid fa-magnifying-glass text-xl"></i>
              </div>

              <h2 className="mb-2 text-lg font-semibold text-white">
                No matching projects
              </h2>

              <p className="text-sm text-neutral-500">
                Try a different keyword or select another project category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-5 rounded-lg bg-amber-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-300"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* DEVELOPMENT APPROACH */}
          <div className="mt-16 rounded-xl border border-neutral-800 bg-[#171717] p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/10 text-amber-400">
              <i className="fa-solid fa-laptop-code text-xl"></i>
            </div>

            <h2 className="text-xl font-semibold text-white">
              Learning Through Building
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-400">
              Each project is an opportunity to apply development concepts,
              strengthen problem-solving skills, and create practical web
              experiences. I continue to refine my skills as I build and
              explore new ideas.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {["Creative Thinking", "Problem Solving", "Continuous Improvement"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-neutral-800 bg-[#202020] px-4 py-2 text-xs text-neutral-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-10 pb-5 text-center">
            <p className="text-sm text-neutral-400">
              Every project is another step forward in my development journey.
            </p>

            <div className="mt-4 flex justify-center gap-3 text-amber-400">
              <i className="fa-solid fa-code"></i>
              <i className="fa-solid fa-laptop-code"></i>
              <i className="fa-solid fa-rocket"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;