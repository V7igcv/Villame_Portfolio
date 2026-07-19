import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    category: "Project Management",
    title: "e-Legtas",
    subtitle: "GIS-Based Evacuation Management System",

    description:
      "Led the development of a GIS-integrated web and mobile ecosystem for Legazpi City's CDRRMO. Replaced manual evacuation tracking with real-time center monitoring, automated DROMIC reporting, and role-based dashboards to streamline inter-agency coordination.",

    features: [
      "Digital evacuee registration and tracking",
      "Real-time GIS evacuation monitoring",
      "Role-based dashboards",
      "Automated DROMIC reports",
      "Citizen mobile application",
    ],

    tech: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "RAD",
    ],

    github: "https://github.com/robby-deving/e-LegTas",

    live: "https://www.e-legtas.tech/login",

    images: [
      "/images/projects/elegtas-1.png",
      "/images/projects/elegtas-2.png",
      "/images/projects/elegtas-3.png",
    ],
  },

  {
    category: "Full Stack Development",

    title: "Quennect",

    subtitle: "Ligao City Hall General Queuing System",

    description:
      "Developed Quennect, a centralized web-based queuing management system for Ligao City Hall that digitizes and streamlines public service delivery through kiosk-based queue generation, real-time queue monitoring, and centralized transaction management.",

    features: [
      "Kiosk queue generation",
      "Real-time queue monitoring",
      "Inter-office transaction tracking",
      "CSM analytics dashboard",
      "PDF reports",
      "SMS notifications",
      "Role-based access",
    ],

    tech: [
      "Vue.js",
      "Laravel",
      "Tailwind CSS",
      "PostgreSQL",
      "Semaphore SMS",
    ],

    github: "https://github.com/V7igcv/Quennect",

    live: "",

    images: [
      "/images/projects/quennect-1.png",
      "/images/projects/quennect-2.png",
      "/images/projects/quennect-3.png",
    ],
  },

  {
    category: "Web Development",

    title: "Old Man and the Sea Learning Hub",

    subtitle: "Interactive Educational Web App",

    description:
      "Collaborated on the development of a kid-friendly educational platform featuring interactive learning modules, colorful visuals, and engaging experiences.",

    features: [
      "Authentication",
      "Interactive learning modules",
      "Responsive UI",
      "Trivia and quizzes",
    ],

    tech: [
      "React",
      "Tailwind CSS",
      "Supabase",
    ],

    github:
      "https://github.com/meowfu0/old-man-and-the-sea",

    live:
      "https://old-man-and-the-sea.vercel.app/#landing",

    images: [
      "/images/projects/oldman-1.png",
      "/images/projects/oldman-2.png",
      "/images/projects/oldman-3.png",
    ],
  },

  {
    category: "Full Stack Development",

    title: "Elevate",

    subtitle: "Architectural Project Tracker",

    description:
      "Developed a project management platform featuring interactive Gantt charts, project scheduling, and real-time progress tracking.",

    features: [
      "Project management",
      "Interactive Gantt charts",
      "Progress dashboard",
      "Deadline monitoring",
    ],

    tech: [
      "Vue.js",
      "Laravel",
      "Inertia.js",
      "PostgreSQL",
    ],

    github:
      "https://github.com/V7igcv/Project_Tracker",

    live: "",

    images: [
      "/images/projects/elevate-1.png",
      "/images/projects/elevate-2.png",
      "/images/projects/elevate-3.png",
    ],
  },
];

function Projects() {

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const previousProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentProject((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
      setCurrentImage(0);
  }, [currentProject]);

  useEffect(() => {

      const interval = setInterval(() => {

          setCurrentImage((prev) =>

              prev === projects[currentProject].images.length - 1
                  ? 0
                  : prev + 1

          );

      }, 3000);

      return () => clearInterval(interval);

  }, [currentProject]);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-background
        py-32
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-primary/5

          blur-[120px]
        "
      />

      <motion.div 
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          className="relative z-10 mx-auto max-w-7xl px-8"
      >

        <p
          className="
            font-semibold
            uppercase
            tracking-[0.3em]
            text-primary
          "
        >
          Projects
        </p>

          <div
            className="
              mt-4
              h-1
              w-24
              rounded-full
              bg-primary
            "
          />

        <h2
          className="
            mt-4
            font-heading
            text-5xl
            font-bold
            text-text
          "
        >
          Featured Projects
        </h2>

        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-muted
          "
        >
          Selected software projects that demonstrate my experience in business analysis, project management, and full stack web development.
        </p>

        {/* Project Card */}

        <div
          className="
            relative
            mt-20

            rounded-[2rem]

            border
            border-primary/20

            bg-surface

            overflow-hidden

            shadow-[0_20px_60px_rgba(0,0,0,.25)]
          "
        >

        {/* Navigation Arrows */}
        <div
          className="
            absolute
            top-8
            right-8

            z-30

            flex
            items-center
            gap-3
          "
        >
          <button
            onClick={previousProject}
            className="
              rounded-full

              border
              border-white/10

              bg-surface

              p-4

              transition-all
              duration-300

              hover:scale-110
              hover:border-primary
              hover:bg-primary
              hover:text-background
            "
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextProject}
            className="
              rounded-full

              border
              border-white/10

              bg-surface

              p-4

              transition-all
              duration-300

              hover:scale-110
              hover:border-primary
              hover:bg-primary
              hover:text-background
            "
          >
            <ChevronRight />
          </button>

        </div>

          <AnimatePresence mode="wait">

          <motion.div
              key={currentProject}
              initial={{
                  opacity:0,
                  y:20
              }}
              animate={{
                  opacity:1,
                  y:0
              }}
              exit={{
                  opacity:0,
                  y:-20
              }}
              transition={{
                  duration:.35
              }}
              className="grid grid-cols-[1.05fr_.95fr]"
          >

            {/* LEFT */}

            <div className="p-12">

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                {projects[currentProject].category}
              </p>

              <h3
                className="
                  mt-4

                  font-heading

                  text-4xl

                  font-bold

                  text-text
                "
              >
                {projects[currentProject].title}
              </h3>

              <p
                className="
                  mt-2

                  text-xl

                  text-muted
                "
              >
                {projects[currentProject].subtitle}
              </p>

              {/* Description */}

              <p
                className="
                  mt-8

                  leading-8

                  text-muted
                "
              >
                {projects[currentProject].description}
              </p>

              {/* Features */}

              <div className="mt-10">

                <h4 className="font-semibold text-text">
                  Key Features
                </h4>

                <ul className="mt-5 space-y-3">

                  {projects[currentProject].features.map((feature) => (

                    <li
                      key={feature}
                      className="text-muted"
                    >
                      • {feature}
                    </li>

                  ))}

                </ul>

              </div>

              {/* Tech */}

              <div className="mt-10">

                <h4 className="font-semibold text-text">
                  Tech Stack
                </h4>

                <div className="mt-5 flex flex-wrap gap-3">

                  {projects[currentProject].tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full

                        border
                        border-primary/20

                        bg-primary/10

                        px-5
                        py-2

                        text-sm

                        text-primary
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
                flex
                flex-col

                justify-center
                items-center

                bg-background

                p-10
              "
            >

              {/* Browser Window */}

              <div
                className="
                  w-full

                  overflow-hidden

                  rounded-2xl

                  border
                  border-white/10

                  bg-surface

                  shadow-2xl
                "
              >

                {/* Browser Bar */}

                <div
                  className="
                    flex

                    items-center

                    gap-2

                    border-b
                    border-white/10

                    px-5
                    py-4
                  "
                >

                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />

                </div>

                {/* Screenshot */}

                <div
                  className="
                    relative

                    aspect-video

                    overflow-hidden

                    bg-background
                  "
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={projects[currentProject].images[currentImage]}
                      alt={projects[currentProject].title}

                      initial={{
                          opacity:0,
                          scale:1.05
                      }}

                      animate={{
                          opacity:1,
                          scale:1
                      }}

                      exit={{
                          opacity:0,
                          scale:.97
                      }}

                      transition={{
                          duration:.45
                      }}

                      className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                      "
                    />
                  </AnimatePresence>  
                </div>

              </div>

                {/* Buttons */}

                <div className="mt-8 flex justify-center gap-4">

                  <a
                    href={projects[currentProject].github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      bg-primary
                      px-6
                      py-3
                      font-semibold
                      text-background
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-secondary
                    "
                  >
                    View GitHub
                  </a>

                  {projects[currentProject].live && (
                    <a
                      href={projects[currentProject].live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        rounded-full
                        border
                        border-primary
                        px-6
                        py-3
                        font-semibold
                        text-primary
                        transition-all
                        duration-300
                        hover:bg-primary
                        hover:text-background
                      "
                    >
                      Live Demo
                    </a>
                  )}

                </div>

            </div>

          </motion.div>

          </AnimatePresence>

        </div>

        {/* Project Dots */}

        <div className="mt-8 flex justify-center gap-3">

          {projects.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`
                h-3
                rounded-full
                transition-all
                duration-300

                ${
                  currentProject === index
                    ? "w-10 bg-primary"
                    : "w-3 bg-white/20 hover:bg-primary/40"
                }
              `}
            />

          ))}

        </div>

      </motion.div>

    </section>
  )
}

export default Projects