import { GraduationCap, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const education = [
  {
    school: "Bicol University College of Science",
    level: "Bachelor of Science in Information Technology",
    year: "2022 - 2026",
    achievements: [
      "Magna Cum Laude",
      "President's Lister",
    ],
  },
  {
    school: "Divine Word College of Legazpi",
    level: "Junior & Senior High School",
    year: "2016 - 2022",
    achievements: [
      "Academic Excellence",
      "High Honors",
    ],
  },
  {
    school: "Bagumbayan Central School",
    level: "Elementary School",
    year: "2010 - 2016",
    achievements: [],
  },
];

function Education() {
  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        bg-surface
        py-32
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          left-1/2

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-primary/5

          blur-[120px]
        "
      />

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
        className="relative z-10 mx-auto max-w-7xl px-8"
      >

        {/* Heading */}

        <p className="font-semibold uppercase tracking-[0.3em] text-primary">
          Education
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
          Academic Journey
        </h2>

        {/* Horizontal Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

        <div
          className="
            absolute
            left-0
            right-0
            top-5

            h-[2px]

            bg-primary/20
          "
        />

          <div
            className="
              relative
              grid
              grid-cols-3
              gap-10
            "
          >
            {education.map((item, index) => (

            <div
              key={item.school}
              className="
                relative

                flex
                flex-col

                items-center
                text-center
              "
            >

                {/* Timeline Dot */}

                <div
                  className="
                    relative
                    z-20

                    mb-8

                    h-12
                    w-12

                    flex
                    items-center
                    justify-center

                    rounded-full

                    border-4
                    border-surface

                    bg-primary

                    shadow-[0_0_20px_rgba(56,189,248,.35)]
                  "
                >
                  <GraduationCap
                    size={18}
                    className="text-background"
                  />
                </div>

                {/* Card */}

                <div
                  className="
                    w-full
                    h-[280px]

                    rounded-3xl

                    items-start
                    text-left

                    border
                    border-white/10

                    bg-background

                    p-8

                    transition-all
                    duration-300

                    hover:-translate-y-2
                    hover:border-primary/40
                    hover:shadow-[0_0_30px_rgba(56,189,248,.12)]
                  "
                >

                  {/* School */}

                  <h3 className="text-xl font-bold text-text">
                    {item.school}
                  </h3>

                  {/* Level */}

                  <p className="mt-2 text-md font-semibold text-primary">
                    {item.level}
                  </p>

                  {/* Year */}

                  <p className="mt-5 text-sm text-muted">
                    {item.year}
                  </p>

                  {/* Achievements */}

                  {item.achievements.length > 0 && (

                    <div className="mt-8 flex flex-wrap gap-3">

                      {item.achievements.map((achievement) => (

                        <div
                          key={achievement}
                          className="
                            flex
                            items-center
                            gap-1.5

                            rounded-full

                            border
                            border-primary/20

                            bg-primary/10

                            px-3
                            py-1.5

                            text-primary
                          "
                        >
                          <Award size={16} />

                          <span className="text-[10px]">
                            {achievement}
                          </span>

                        </div>

                      ))}

                    </div>

                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Education