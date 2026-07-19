import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import canvaLogo from "../../assets/logos/canva.svg";
import css3Logo from "../../assets/logos/css-3.svg";
import figmaLogo from "../../assets/logos/figma.svg";
import gitLogo from "../../assets/logos/git.svg";
import githubLogo from "../../assets/logos/github.svg";
import html5Logo from "../../assets/logos/html-5.svg";
import jsLogo from "../../assets/logos/javascript.svg";
import jiraLogo from "../../assets/logos/jira.svg";
import laravelLogo from "../../assets/logos/laravel.svg";
import mysqlLogo from "../../assets/logos/mysql.svg";
import phpLogo from "../../assets/logos/php.svg";
import postgresqlLogo from "../../assets/logos/postgresql.svg";
import postmanLogo from "../../assets/logos/postman.svg";
import reactLogo from "../../assets/logos/react.svg";
import supabaseLogo from "../../assets/logos/supabase.svg";
import tailwindLogo from "../../assets/logos/tailwindcss.svg";
import vercelLogo from "../../assets/logos/vercel.svg";
import vscodeLogo from "../../assets/logos/vscode.svg";
import vueLogo from "../../assets/logos/vue.svg";
import inertiaLogo from "../../assets/logos/inertiajs.svg";
import workbenchLogo from "../../assets/logos/workbench.svg";

const professional = [
  {
    title: "Business Analysis",
    skills: [
      "Requirements Gathering",
      "Stakeholder Communication",
      "Business Process Analysis",
      "Functional Documentation",
      "System Analysis & Design",
      "UML Modeling",
    ],
  },
  {
    title: "Project Management",
    skills: [
      "Project Planning",
      "Team Coordination",
      "Rapid Application Development",
      "Project Documentation",
    ],
  },
  {
    title: "Software Development",
    skills: [
      "Full Stack Development",
      "RESTful APIs",
      "CRUD Applications",
      "Database Design",
      "Relational Database Modeling",
      "UI Prototyping",
    ],
  },
];

const technologyGroups = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        logo: reactLogo,
      },
      {
        name: "Vue.js",
        logo: vueLogo,
      },
      {
        name: "JavaScript",
        logo: jsLogo,
      },
      {
        name: "Tailwind CSS",
        logo: tailwindLogo,
      },
      {
        name: "HTML5",
        logo: html5Logo,
      },
      {
        name: "CSS3",
        logo: css3Logo,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "PHP",
        logo: phpLogo,
      },
      {
        name: "Laravel",
        logo: laravelLogo,
      },
      {
        name: "Inertia.js",
        logo: inertiaLogo,
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        name: "MySQL",
        logo: mysqlLogo,
      },
      {
        name: "PostgreSQL",
        logo: postgresqlLogo,
      },
      {
        name: "Supabase",
        logo: supabaseLogo,
      },
    ],
  },
  {
    title: "Development Tools",
    items: [
      {
        name: "Git",
        logo: gitLogo,
      },
      {
        name: "GitHub",
        logo: githubLogo,
      },
      {
        name: "VS Code",
        logo: vscodeLogo,
      },
      {
        name: "Postman",
        logo: postmanLogo,
      },
      {
        name: "MySQL Workbench",
        logo: workbenchLogo,
      },
      {
        name: "pgAdmin",
        logo: postgresqlLogo,
      },
      {
        name: "Vercel",
        logo: vercelLogo,
      },
    ],
  },
  {
    title: "Design & Collaboration",
    items: [
      {
        name: "Figma",
        logo: figmaLogo,
      },
      {
        name: "Canva",
        logo: canvaLogo,
      },
      {
        name: "Jira",
        logo: jiraLogo,
      },
    ],
  },
];

function Skills() {

const [current, setCurrent] = useState(0);
const [direction, setDirection] = useState(1);

const previousIndex =
    current === 0
        ? technologyGroups.length - 1
        : current - 1;

const nextIndex =
    current === technologyGroups.length - 1
        ? 0
        : current + 1;

const previous = () => {
    setDirection(-1);

    setCurrent((prev) =>
        prev === 0 ? technologyGroups.length - 1 : prev - 1
    );
};

const next = () => {
    setDirection(1);

    setCurrent((prev) =>
        prev === technologyGroups.length - 1 ? 0 : prev + 1
    );
};

  return (
    <section
      id="skills"
      className="bg-background py-32"
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
        className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <p className="text-primary font-semibold uppercase tracking-[0.3em]">
          Skills
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

        <h2 className="mt-4 font-heading text-5xl font-bold text-text">
          What I Bring to Every Project
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          A combination of business analysis, project management, and
          software development skills that allow me to transform ideas
          into practical digital solutions.
        </p>

        {/* Professional Competencies */}

        <h3 className="mt-20 mb-8 text-2xl font-bold text-text">
          Professional Competencies
        </h3>

        <div className="grid gap-8 md:grid-cols-3">

          {professional.map((item) => (

            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-surface
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/40
              "
            >
              <h4 className="mb-6 text-xl font-semibold text-primary">
                {item.title}
              </h4>

              <ul className="space-y-3">

                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted"
                  >
                    • {skill}
                  </li>
                ))}

              </ul>

            </div>

          ))}

        </div>

        {/* Technical Skills */}

        <div className="mt-28">

          <div className="flex items-center justify-between">

            <h3 className="text-2xl font-bold text-text">
              Technical Skills & Tools
            </h3>

          </div>

          {/* Card */}

          <div
            className="
              relative
              mt-12
              h-[560px]
              overflow-hidden
            "
          >

              {/* Left Arrow */}

              <button
                  onClick={previous}
                  className="
                      absolute
                      left-2
                      top-1/2
                      z-30
                      -translate-y-1/2

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



                {/* Previous Card */}

                <motion.div
                  key={`prev-${previousIndex}`}
                  animate={{
                      x: direction === 1 ? -30 : 30,
                      opacity: 0.3,
                      scale: 0.88,
                  }}
                  transition={{
                      duration: .45,
                      ease: "easeInOut",
                  }}
                  className="
                    absolute

                    left-1/2
                    top-1/2

                    -translate-y-1/2
                    -translate-x-[95%]

                    w-[520px]
                    h-[400px]

                    rounded-3xl
                    border
                    border-white/10

                    bg-surface/50

                    p-8

                    flex
                    flex-col

                    opacity-30
                    scale-[0.88]

                    blur-[1px]

                    z-10
                  "
                >
                  <h4
                    className="
                      mb-8
                      text-center
                      text-xl
                      font-bold
                      text-primary
                    "
                  >
                    {technologyGroups[previousIndex].title}
                  </h4>

                  <div
                      className="
                          flex-1

                          flex
                          items-center
                          justify-center
                      "
                  >

                      <div
                          className="
                            flex
                            flex-wrap

                            justify-center
                            content-center

                            gap-x-8
                            gap-y-8

                            max-w-[420px]
                          "
                      >

                            {technologyGroups[previousIndex].items.map((item) => (

                                <div
                                    key={item}
                                    className="
                                        w-20

                                        flex
                                        flex-col
                                        items-center

                                        gap-2
                                    "
                                >

                                  <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="
                                      h-14
                                      w-14
                                      object-contain
                                      transition-transform
                                      duration-300
                                      hover:scale-110
                                    "
                                  />

                                    <p className="text-center text-sm text-muted">
                                        {item.name}
                                    </p>

                                </div>

                            ))}

                      </div>

                  </div>
                </motion.div>

                {/* CENTER CARD */}

                <AnimatePresence mode="wait">

                  <motion.div
                    key={technologyGroups[current].title}
                    initial={{
                        opacity:0,
                        scale:.88,
                        x: direction > 0 ? 120 : -120,
                    }}
                    animate={{
                        opacity:1,
                        scale:1,
                        x:0,
                    }}
                    exit={{
                        opacity:0,
                        scale:.88,
                        x: direction > 0 ? -120 : 120,
                    }}
                    transition={{
                        duration:.45,
                        ease:"easeInOut",
                    }}
                    className="
                    absolute

                    left-1/2
                    top-1/2

                    -translate-y-1/2
                    -translate-x-1/2

                    w-[620px]
                    h-[400px]

                    rounded-3xl
                    border
                    border-primary/30

                    bg-surface

                    p-10

                    flex
                    flex-col

                    shadow-2xl

                    z-20
                    "
                  >
                    <h4
                      className="
                        mb-8
                        text-center
                        text-2xl
                        font-bold
                        text-primary
                      "
                    >
                      {technologyGroups[current].title}
                    </h4>

                    <div
                        className="
                            flex-1

                            flex
                            items-center
                            justify-center
                        "
                    >

                        <div
                            className="
                              flex
                              flex-wrap

                              justify-center
                              content-center

                              gap-x-8
                              gap-y-8

                              max-w-[420px]
                            "
                        >

                            {technologyGroups[current].items.map((item) => (

                                <div
                                    key={item}
                                    className="
                                        w-20

                                        flex
                                        flex-col
                                        items-center

                                        gap-2
                                    "
                                >

                                  <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="
                                      h-14
                                      w-14
                                      object-contain
                                      transition-transform
                                      duration-300
                                      hover:scale-110
                                    "
                                  />

                                    <p className="text-center text-sm text-muted">
                                        {item.name}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                  </motion.div>

                </AnimatePresence>

                {/* NEXT CARD */}

                <motion.div
                  key={`next-${nextIndex}`}
                  animate={{
                      x: direction === 1 ? -30 : 30,
                      opacity: 0.3,
                      scale: 0.88,
                  }}
                  transition={{
                      duration: .45,
                      ease: "easeInOut",
                  }}
                  className="
                  absolute

                  left-1/2
                  top-1/2

                  -translate-y-1/2
                  translate-x-[5%]

                  w-[520px]
                  h-[400px]

                  rounded-3xl
                  border
                  border-white/10

                  bg-surface/50

                  p-8

                  flex
                  flex-col

                  opacity-30
                  scale-[0.88]

                  blur-[1px]

                  z-10
                  "
                >
                  <h4
                    className="
                      mb-8
                      text-center
                      text-xl
                      font-bold
                      text-primary
                    "
                  >
                    {technologyGroups[nextIndex].title}
                  </h4>

                  <div
                      className="
                          flex-1

                          flex
                          items-center
                          justify-center
                      "
                  >

                      <div
                          className="
                            flex
                            flex-wrap

                            justify-center
                            content-center

                            gap-x-8
                            gap-y-8

                            max-w-[420px]
                          "
                      >

                            {technologyGroups[nextIndex].items.map((item) => (

                                <div
                                    key={item}
                                    className="
                                        w-20

                                        flex
                                        flex-col
                                        items-center

                                        gap-2
                                    "
                                >

                                  <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="
                                      h-14
                                      w-14
                                      object-contain
                                      transition-transform
                                      duration-300
                                      hover:scale-110
                                    "
                                  />

                                    <p className="text-center text-sm text-muted">
                                        {item.name}
                                    </p>

                                </div>

                            ))}

                      </div>

                  </div>
                </motion.div>



              {/* Right Arrow */}

              <button
                  onClick={next}
                  className="
                      absolute
                      right-2
                      top-1/2
                      z-30
                      -translate-y-1/2

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

          <div
              className="
                  mt-8

                  flex

                  justify-center

                  gap-3
              "
          >

          {
          technologyGroups.map((_, index)=>(

          <button

              key={index}

              onClick={()=>setCurrent(index)}

              className={`
                  h-3

                  rounded-full

                  transition-all
                  duration-300

                  ${
                      current===index
                      ? "w-10 bg-primary"
                      : "w-3 bg-white/20 hover:bg-primary/40"
                  }
              `}
          />

          ))
          }

          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default Skills;