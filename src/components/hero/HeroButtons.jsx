function HeroButtons() {
  return (
    <div
      className="
        mt-10

        flex
        flex-wrap

        justify-center

        gap-5
      "
    >
      <button
        className="
          rounded-full

          bg-primary

          px-8
          py-4

          font-semibold

          text-background

          transition-all
          duration-300

          hover:scale-105
        "
      >
        View Projects
      </button>

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

          hover:bg-primary
          hover:text-background
        "
      >
        Download Resume
      </button>

      <button
        className="
          rounded-full

          border
          border-white/20

          px-8
          py-4

          font-semibold

          text-text

          transition-all
          duration-300

          hover:border-primary
          hover:text-primary
        "
      >
        Contact Me
      </button>
    </div>
  );
}

export default HeroButtons;