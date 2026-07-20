import { AnimatePresence, motion } from "framer-motion";

const experiences = [
  {
    company: "Capstone Project | Bicol University",
    role: "Project Management & Business Analysis",
    duration: "Mar 2025 - Dec 2025",
    image: "/images/experience/cdrrmo.png",
    description:
      "Coordinated with the Legazpi CDRRMO to analyze evacuation processes from registration through reporting, gathered and translated system requirements into functional specifications, led the project team by planning tasks, setting timelines, and monitoring progress, and prepared key project documentation including the Software Requirements Specification (SRS), use case diagrams, activity diagrams, and other UML artifacts.",
    tags: [
      "Systems Analysis",
      "Requirement Gathering",
      "Business Process Analysis",
    ],
  },

  {
    company: "On-the-Job Training | Ligao City Hall",
    role: "Full Stack Development",
    duration: "Feb 2026 - May 2026",
    image: "/images/experience/Ligao.jpg",
    description:
      "Collaborated with the Ligao City HR Office to analyze City Hall queuing processes, identify operational issues, document functional requirements, and develop a General Queuing System integrating the manual queuing process and ARTA Client Satisfaction Survey into one responsive platform.",
    tags: [
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },

  {
    company: "On-the-Job Training | Ligao City Hall",
    role: "Video Editing",
    duration: "Apr 2026 - May 2026",
    image: "/images/experience/video2.png",
    description:
      "Produced and edited government presentation videos using transitions, animations, graphics, and audio enhancements while collaborating with staff to effectively communicate information.",
    tags: [
      "Canva",
      "ElevenLabs",
      "Multimedia",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-surface py-32"
    >
      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
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
          className="mx-auto max-w-7xl px-8"
      >

        {/* Heading */}

        <p className="font-semibold uppercase tracking-[0.3em] text-primary">
          Experience
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
          Professional Experience
        </h2>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-4
              top-0
              bottom-0
              w-[2px]
              bg-primary/25
            "
          />

          {experiences.map((exp, index) => (

            <div
              key={index}
              className="relative mb-14 pl-16"
            >

              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  left-0
                  top-5

                  h-8
                  w-8

                  rounded-full

                  border-4
                  border-background

                  bg-primary
                "
              />

              {/* Card */}

              <div
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-3xl

                  border
                  border-primary/20

                  bg-background

                  p-10

                  transition-all
                  duration-300

                  hover:border-primary/50
                  hover:shadow-[0_0_30px_rgba(56,189,248,.15)]
                "
              >
                {/* Background Image */}

                <div
                  className="
                    absolute

                    top-0
                    right-0

                    h-full
                    w-full

                    translate-x-full

                    overflow-hidden

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:translate-x-0
                  "
                >
                <img
                    src={exp.image}
                    alt={exp.company}
                    className="
                      h-full
                      w-full

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                />
                </div>
                {/* Gradient */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-l

                    from-transparent
                    via-background/30
                    to-background
                  "
                />
                {/* Dark Overlay */} 
                <div className=" absolute inset-0 bg-background/40 opacity-0 transition-all duration-700 group-hover:opacity-100 " />
                <div className="relative z-20">
                {/* Header */}

                <div className="flex items-start justify-between gap-8">

                  <div>

                    <h3 className="text-3xl font-bold text-text">
                      {exp.company}
                    </h3>

                    <p className="mt-2 text-xl font-semibold text-primary">
                      {exp.role}
                    </p>

                  </div>

                  <span
                    className="
                      rounded-full

                      border
                      border-primary/30

                      bg-primary/10

                      px-5
                      py-2

                      text-sm
                      font-medium
                      text-primary
                    "
                  >
                    {exp.duration}
                  </span>

                </div>

                {/* Description */}

                <p
                    className="
                        mt-8
                        max-w-4xl

                        leading-8

                        text-muted

                        transition-all
                        duration-300

                        group-hover:opacity-0
                        group-hover:-translate-y-4
                    "
                >
                    {exp.description}
                </p>

                {/* Tags */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {exp.tags.map((tag) => (

                    <span
                      key={tag}
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
                      {tag}
                    </span>

                  ))}

                </div>
                </div>

              </div>

            </div>

          ))}

        </div>

      </motion.div>
    </section>
  );
}

export default Experience;