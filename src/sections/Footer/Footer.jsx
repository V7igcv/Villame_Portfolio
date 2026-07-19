function Footer() {
  return (
    <footer
      id="contact"
      className="
        bg-background
        py-24
      "
    >
      <div className="mx-auto max-w-7xl px-8 text-center">

        {/* Heading */}

        <h2
          className="
            font-heading
            text-3xl
            font-bold
            text-text
          "
        >
          Contact
        </h2>

        {/* Contact Buttons */}

        <div
          className="
            mt-12

            flex
            flex-wrap
            justify-center

            gap-5
          "
        >
          <a
            href="mailto:iangabrielcvillame@gmail.com"
            className="
              rounded-full

              border
              border-primary

              px-7
              py-3

              font-medium

              text-primary

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-primary
              hover:text-background
            "
          >
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/ian-gabriel-villame-491145410/"
            className="
              rounded-full

              border
              border-white/10

              px-7
              py-3

              font-medium

              text-text

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-primary
              hover:bg-primary/10
            "
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/V7igcv"
            className="
              rounded-full

              border
              border-white/10

              px-7
              py-3

              font-medium

              text-text

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-primary
              hover:bg-primary/10
            "
          >
            GitHub
          </a>

          <a
            href="#"
            className="
              rounded-full

              border
              border-white/10

              px-7
              py-3

              font-medium

              text-text

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-primary
              hover:bg-primary/10
            "
          >
            Facebook
          </a>

        </div>

        {/* Personal Information */}

        <div
          className="
            mt-12

            flex
            flex-wrap
            justify-center

            gap-x-10
            gap-y-3

            text-muted
          "
        >
          <p>iangabrielcvillame@gmail.com</p>

          <p>0976-475-8864</p>

          <p>Legazpi City, Albay</p>
        </div>

        {/* Divider */}

        <div
          className="
            mx-auto
            mt-24

            h-px
            w-full

            bg-white/10
          "
        />

        {/* Footer Bottom */}

        <div
          className="
            mt-10

            space-y-2

            text-center
            text-sm

            text-muted
          "
        >
          <p>
            © 2026 Ian Gabriel C. Villame
          </p>

          <p>
            Designed &amp; Developed using
          </p>

          <p>
            React • Vite • Tailwind CSS • Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer