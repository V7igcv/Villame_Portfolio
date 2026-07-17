import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
      "React",
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    items: [
      "PHP",
      "Laravel",
      "Inertia.js",
    ],
  },
  {
    title: "Database",
    items: [
      "MySQL",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    title: "Development Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MySQL Workbench",
      "pgAdmin",
      "Vercel",
    ],
  },
  {
    title: "Design & Collaboration",
    items: [
      "Figma",
      "Canva",
      "Jira",
    ],
  },
];

function Skills() {

const [current, setCurrent] = useState(0);

const previous = () => {
  setCurrent((prev) =>
    prev === 0 ? technologyGroups.length - 1 : prev - 1
  );
};

const next = () => {
  setCurrent((prev) =>
    prev === technologyGroups.length - 1 ? 0 : prev + 1
  );
};

  return (
    <section
      id="skills"
      className="bg-background py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <p className="text-primary font-semibold uppercase tracking-[0.3em]">
          Skills
        </p>

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

            <h3 className="text-3xl font-bold text-text">
              Technical Skills & Tools
            </h3>

            <div className="flex gap-3">

              <button
                onClick={previous}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-surface
                  p-4
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:text-primary
                  hover:bg-primary
                    hover:scale-110
                "
              >
                <ChevronLeft size={22}/>
              </button>

              <button
                onClick={next}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-surface
                  p-4
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:text-primary
                  hover:bg-primary
                    hover:scale-110
                "
              >
                <ChevronRight size={22}/>
              </button>

            </div>

          </div>

          {/* Card */}

          <AnimatePresence mode="wait">

            <motion.div
                key={current}

                initial={{
                    opacity: 0,
                    x: 80,
                }}

                animate={{
                    opacity: 1,
                    x: 0,
                }}

                exit={{
                    opacity: 0,
                    x: -80,
                }}

                transition={{
                    duration: .45,
                }}

                className="
                    mt-10

                    rounded-[32px]

                    border
                    border-white/10

                    bg-surface

                    p-10
                "
            >

              <motion.h4

                  initial={{
                      opacity:0,
                      y:20,
                  }}

                  animate={{
                      opacity:1,
                      y:0,
                  }}

                  transition={{
                      delay:.1,
                  }}

                  className="
                      mb-10

                      text-3xl
                      font-bold

                      text-primary
                  "
              >
                {technologyGroups[current].title}
              </motion.h4>

              <div
                className="
                  grid

                  grid-cols-3

                  gap-6
                "
              >

                {technologyGroups[current].items.map((item, index) => (

                  <motion.div

                      key={item}

                      initial={{
                          opacity:0,
                          y:25,
                      }}

                      animate={{
                          opacity:1,
                          y:0,
                      }}

                      transition={{
                          delay:index * .08,
                      }}
                    className="
                      group

                      rounded-2xl

                      border
                      border-white/10

                      bg-background

                      p-6

                      transition-all
                      duration-300

                      hover:-translate-y-2
                      hover:border-primary/40
                    "
                  >

                    {/* Placeholder */}

                    <div
                      className="
                        mx-auto

                        mb-5

                        flex

                        h-16
                        w-16

                        items-center
                        justify-center

                        rounded-xl

                        bg-surface

                        text-xs
                        text-muted
                      "
                    >
                      Logo
                    </div>

                    <p
                      className="
                        text-center
                        font-medium
                        text-text
                      "
                    >
                      {item}
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </AnimatePresence>

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

      </div>
    </section>
  );
}

export default Skills;