import Navbar from "./Navbar"

function About() {
  const skills = [
    "Java",
    "Adobe Experience Manager",
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Git",
    "Vercel",
  ]

  const skillCategories = [
    {
      title: "Java & AEM Development",
      description: "CMS development and reusable AEM components",
      icon: "fa-solid fa-code",
      items: [
        "Java",
        "AEM 6.5",
        "HTL",
        "Sling Models",
        "OSGi Services",
        "JCR & CRXDE Lite",
        "Editable Templates & Dialogs",
        "Client Libraries",
        "Author-Publish Workflow",
      ],
    },
    {
      title: "Frontend Development",
      description: "Building responsive web interfaces",
      icon: "fa-solid fa-laptop-code",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Axios",
      ],
    },
    {
      title: "Backend & Database",
      description: "Server-side development and data management",
      icon: "fa-solid fa-database",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Nodemailer",
      ],
    },
    {
      title: "Tools & Deployment",
      description: "Development workflow and application deployment",
      icon: "fa-solid fa-screwdriver-wrench",
      items: [
        "Git",
        "GitHub",
        "Vercel",
        "Claude AI",
      ],
    },
  ]

  const values = [
    "Problem Solving",
    "Continuous Learning",
    "Reusable Components",
    "Clean Code",
    "Teamwork",
  ]

  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <Navbar />

      <main className="px-5 py-12 sm:py-16">
        {/* Page heading */}
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-2 text-sm text-amber-400">
            <i className="fa-solid fa-user mr-2"></i>
            About Me
          </span>

          <h1 className="mt-5 mb-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            About <span className="text-amber-400">Me</span>
          </h1>

          <p className="leading-7 text-gray-400">
            My professional journey, technical skills, and experience in Java
            development and Adobe Experience Manager.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-amber-400/25 px-3 py-1.5 text-xs text-amber-300 transition duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-400/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </header>

        {/* Professional profile */}
        <section className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-xl shadow-black/20 transition duration-300 hover:border-amber-400/30 sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Professional Profile
            </p>

            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Jayasri Ravichandran
            </h2>

            <p className="mb-6 text-lg font-semibold text-amber-300">
              Java Developer | AEM Developer
            </p>

            <div className="mb-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
              <span>
                <i className="fa-solid fa-envelope mr-2 text-amber-400"></i>
                <a
                  href="mailto:jayasrivignesh27@gmail.com"
                  className="transition hover:text-amber-300"
                >
                  jayasrivignesh27@gmail.com
                </a>
              </span>

              <span>
                <i className="fa-solid fa-location-dot mr-2 text-amber-400"></i>
                Chennai, India
              </span>
            </div>

            <a
              href="/Jayasri___Java_Developer.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 px-5 py-2.5 text-sm font-semibold text-amber-300 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-400/10 hover:shadow-[0_0_18px_rgba(251,191,36,0.1)]"
            >
              <i className="fa-solid fa-download"></i>
              Download Resume
            </a>

            <hr className="my-8 border-white/10" />

            <h3 className="mb-3 text-xl font-bold">
              About <span className="text-amber-400">My Journey</span>
            </h3>

            <p className="mb-4 text-sm leading-7 text-gray-300">
              I am a developer with one year of professional experience as a
              Junior Java Developer at Sutrix Group, where I worked from August
              2022 to August 2023. My technical interests include Java
              development, Adobe Experience Manager, and modern web technologies.
            </p>

            <p className="text-sm leading-7 text-gray-300">
              My AEM knowledge includes developing reusable components using
              HTL and Sling Models, working with OSGi services, understanding
              JCR structures and CRXDE Lite, configuring templates and dialogs,
              managing Client Libraries, and working with author-publish
              workflows. I am also developing my frontend and full-stack skills
              using JavaScript, React.js, Node.js, Express.js, and MongoDB.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-gray-300 transition duration-300 hover:border-amber-400/40 hover:text-amber-300"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Professional experience */}
        <section className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-[#171717] p-6 transition duration-300 hover:border-amber-400/30 sm:p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Professional <span className="text-amber-400">Experience</span>
            </h2>

            <div className="border-l-2 border-amber-400/40 pl-5">
              <div className="relative">
                <span className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border-2 border-amber-400 bg-[#171717]"></span>

                <h3 className="text-lg font-bold">
                  Junior Java Developer
                </h3>

                <p className="mt-1 font-medium text-amber-300">
                  Sutrix Group
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  August 2022 – August 2023
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-300">
                  Professional experience in Java development. My related AEM
                  technical knowledge includes reusable components, Sling
                  Models, OSGi services, JCR, templates, dialogs, Client
                  Libraries, and author-publish workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-[#171717] p-6 transition duration-300 hover:border-amber-400/30 sm:p-8">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
              <i className="fa-solid fa-graduation-cap text-amber-400"></i>
              <span>
                Education
              </span>
            </h2>

            <div className="border-l-2 border-amber-400/40 pl-5">
              <h3 className="text-lg font-bold">
                B.E. Electronics and Communication Engineering
              </h3>

              <p className="mt-2 text-amber-300">
                St. Peter's College of Engineering
              </p>

              <p className="mt-1 text-sm text-gray-400">
                2017 – 2021
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Avadi, Chennai
              </p>
            </div>
          </div>
        </section>

        {/* Technical skills */}
        <section className="mx-auto mt-14 max-w-4xl">
          <header className="mb-8 text-center">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-amber-400">
              TECHNICAL EXPERTISE
            </p>

            <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">
              Technologies I <span className="text-amber-400">Work With</span>
            </h2>

            <p className="text-sm leading-6 text-gray-400">
              An overview of my skills across Java and AEM, frontend development,
              backend development, databases, and developer tools.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {skillCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border border-white/10 bg-[#171717] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_10px_30px_rgba(251,191,36,0.06)]"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                    <i className={`${category.icon} text-lg text-amber-400`}></i>
                  </div>

                  <h3 className="text-lg font-bold">
                    {category.title}
                  </h3>
                </div>

                <p className="mb-5 text-sm leading-6 text-gray-400">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-300 transition duration-300 hover:border-amber-400/40 hover:text-amber-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-[#171717] p-6 sm:p-8">
            <h2 className="mb-5 text-xl font-bold">
              Languages
            </h2>

            <div className="flex flex-wrap gap-3">
              {["English", "Tamil"].map((language) => (
                <span
                  key={language}
                  className="rounded-lg border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300"
                >
                  <i className="fa-solid fa-language mr-2"></i>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About