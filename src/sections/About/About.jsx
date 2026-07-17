import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-surface
        py-32
      "
    >
    {/* Background Glow */}

    <motion.div
      animate={{
        y: [-15, 15, -15],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        top-0
        left-1/2

        h-[500px]
        w-[500px]

        -translate-x-1/2

        rounded-full

        bg-primary/5

        blur-[180px]
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
      <div
        className="
          mx-auto
          max-w-7xl
          px-8
          grid
          grid-cols-2
          gap-24
          items-center
        "
      >
        {/* LEFT */}

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
          className="flex flex-col items-center"
        >

          {/* Photo Card */}

          <motion.div
            whileHover={{
              y: -8,
              rotate: -1.5,
              scale: 1.02,
            }}
            transition={{
              duration: .35,
            }}
            className="
              relative
              h-[520px]
              w-[370px]
              rounded-[32px]
              border
              border-primary/20
              bg-background
              p-4
              shadow-2xl
            "
          >
            <img
              src="/images/graduationn.png"
              alt="Ian Gabriel"
              className="
                h-full
                w-full
                rounded-[24px]
                object-cover
              "
            />
          </motion.div>

          <h3
            className="
              mt-8
              font-heading
              text-3xl
              font-bold
              tracking-tight
            "
          >
            Ian Gabriel C. Villame
          </h3>

          <p
            className="
              mt-2
              text-muted
            "
          >
            Information Technology Graduate
          </p>
          <div
            className="
              mt-6
              h-[2px]
              w-24
              rounded-full
              bg-primary
            "
          />

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
        >

          <p
            className="
              font-semibold
              tracking-[0.3em]
              text-primary
            "
          >
            ABOUT ME
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
              mt-8
              font-heading
              text-5xl
              font-bold
              leading-tight
            "
          >
            Passionate about building software that solves real-world problems.
          </h2>

          <p
            className="
              mt-8
              text-lg
              leading-9
              text-muted
            "
          >
            I am an Information Technology graduate from Bicol University with
            experience in full stack web development, system analysis and
            design, project management, business analysis, and multimedia
            presentation.
          </p>

          <p
            className="
              mt-6
              text-lg
              leading-9
              text-muted
            "
          >
            Throughout my academic journey, I have worked on projects that
            required collaboration, problem solving, and software development
            using modern technologies. I enjoy transforming business
            requirements into practical software solutions while ensuring a
            smooth user experience.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;