function HeroImage() {
  return (
    <div
      className="
        relative
        z-20
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          rounded-full

          bg-primary/20

          blur-3xl

          scale-125
        "
      />

      {/* Outer Ring */}
      <div
        className="
          absolute
          inset-0

          rounded-full

          border
          border-primary/40

          scale-110
        "
      />

      {/* Placeholder */}
      <div
        className="
          relative

          h-56
          w-56

          rounded-full

          border-4
          border-primary

          bg-surface

          flex
          items-center
          justify-center

          text-muted

          overflow-hidden
        "
      >
        Your Photo
      </div>
    </div>
  );
}

export default HeroImage;