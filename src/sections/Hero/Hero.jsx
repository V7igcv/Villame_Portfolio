import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  {
    title: "Business Analyst",
    skills:
      "Requirements Gathering • Business Process Analysis • UML Modeling",
  },
  {
    title: "Project Manager",
    skills:
      "Project Planning • RAD • Team Coordination • Jira",
  },
  {
    title: "Full Stack Developer",
    skills:
      "Vue.js • Laravel • PHP • JavaScript • MySQL • PostgreSQL • RESTful APIs",
  },
];

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">

      {/* Background Glow */}
      <div
        className="absolute -top-60 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          min-h-screen
          px-8
          flex
          items-center
          justify-between
          gap-12
        "
      >

        {/* LEFT */}
        <div className="relative z-30 flex-1">

          <h2
            className="
              font-heading
              text-5xl
              font-black
              uppercase
              leading-none
              text-primary
            "
          >
            Hello! I'm
          </h2>

          <h1
            className="
              relative
              z-20
              mt-2
              w-max
              font-heading
              text-[6rem]
              font-black
              uppercase
              leading-[0.85]
              tracking-tight
              text-text
            "
          >
            Ian Gabriel
            <br />
            C. Villame
          </h1>

          <div
            className="
              mt-6
              h-[2px]
              w-28
              rounded-full
              bg-primary
            "
          />

          {/* Animated Badge */}

          <div className="mt-10">

            <div
              className="
                inline-flex
                min-w-[250px]
                justify-center
                rounded-full
                border
                border-primary/30
                bg-primary/15
                px-6
                py-3
                overflow-hidden
              "
            >
              <AnimatePresence mode="wait">

                <motion.span
                  key={roles[currentRole].title}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: -20,
                  }}

                  transition={{
                    duration: .45,
                  }}

                  className="
                    text-lg
                    font-semibold
                    text-primary
                  "
                >
                  {roles[currentRole].title}
                </motion.span>

              </AnimatePresence>
            </div>

            <div
              className="
                mt-6
                h-16
                max-w-2xl
              "
            >

              <AnimatePresence mode="wait">

                <motion.p
                  key={roles[currentRole].skills}

                  initial={{
                    opacity: 0,
                    y: 15,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: -15,
                  }}

                  transition={{
                    duration: .45,
                  }}

                  className="
                    text-lg
                    leading-8
                    text-muted
                  "
                >
                  {roles[currentRole].skills}
                </motion.p>

              </AnimatePresence>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-0 flex flex-wrap gap-5">

            {/* Primary */}

            <button
              className="
                group
                rounded-full
                bg-primary
                px-8
                py-4
                font-semibold
                text-background
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-secondary
                hover:shadow-[0_0_15px_rgba(56,189,248,0.20)]
                active:translate-y-0
              "
            >
              View Projects
            </button>

            {/* Secondary */}

            <button
              className="
                rounded-full
                border
                border-primary
                px-8
                py-4
                font-semibold
                text-primary
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-primary
                hover:text-background
                hover:shadow-[0_0_15px_rgba(56,189,248,0.20)]

                active:translate-y-0
              "
            >
              Download Resume
            </button>

            {/* Ghost */}

            <button
              className="
                rounded-full
                border
                border-white/10
                px-8
                py-4
                font-semibold
                text-text
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/30
                hover:bg-white/10
                active:translate-y-0
              "
            >
              Contact Me
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div
          className="
            absolute
            right-8
            top-1/2
            -translate-y-1/2
            w-[520px]
            h-[650px]
          "
        >

          {/* Blue Card */}

          <div
            className="
              absolute
              top-8
              left-10
              h-[560px]
              w-[420px]
              rounded-3xl
              border
              border-primary/40
              bg-surface
            "
          />

          {/* Glow */}

          <div
            className="
              absolute
              top-8
              left-10
              h-[560px]
              w-[420px]
              rounded-3xl
              bg-primary/15
              blur-3xl
            "
          />

          {/* PHOTO */}

          <img
            src="/images/Villame2.png"
            alt="Ian Gabriel"
            className="
              absolute
              bottom-15
              left-8
              w-[520px]
              max-w-none
              z-20
              pointer-events-none
              select-none
            "
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;