function Button({
  children,
  variant = "primary",
  onClick,
}) {
  const styles = {
    primary:
      "bg-primary text-background hover:bg-secondary",

    secondary:
      "border border-primary text-primary hover:bg-primary hover:text-background",
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-6
        py-3
        rounded-2xl
        font-medium
        transition-all
        duration-300
        hover:-translate-y-1
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;