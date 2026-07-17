import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div
    className="
        -mt-16

        z-10

        max-w-4xl

        flex
        flex-col

        items-center

        text-center
      "
    >
        <p
        className="
            mt-20

            text-lg

            font-medium

            text-primary
        "
        >
        Hello! I'm
        </p>

        <h1
        className="
            mt-3

            font-heading

            text-5xl
            md:text-7xl

            font-bold

            leading-tight
        "
        >
        Ian Gabriel C. Villame
        </h1>

      {/* Placeholder */}
      <div
        className="
          mt-10

          rounded-xl

          border
          border-white/10

          bg-surface/60

          px-8
          py-5
        "
      >
        Business Analysis Placeholder
      </div>

      <p
        className="
          mt-8

          max-w-3xl

          text-lg

          leading-8

          text-muted
        "
      >
        I build user-focused software solutions by combining software
        development, business analysis, and project management to deliver
        efficient digital experiences.
      </p>

      <HeroButtons />
    </div>
  );
}

export default HeroContent;