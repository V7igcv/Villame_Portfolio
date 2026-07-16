import { useRef, useState } from "react";

const links = [
  "About Me",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

function Navbar() {
  const [visible, setVisible] = useState(false);

  const hideTimeout = useRef(null);

  // Show Navbar
  const showNavbar = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    setVisible(true);
  };

  // Hide Navbar after delay
  const hideNavbar = () => {
    hideTimeout.current = setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

    return (
    <>
        {/* Invisible trigger */}
        <div
        className="fixed top-0 left-0 w-full h-10 z-40"
        onMouseEnter={showNavbar}
        />

        {/* Navbar */}
        <nav
        onMouseEnter={showNavbar}
        onMouseLeave={hideNavbar}
        className={`
            fixed
            top-0
            left-1/2
            -translate-x-1/2
            z-50

            transform-gpu
            transition-all
            duration-500
            ease-out

            ${
            visible
                ? "translate-y-5 opacity-100 scale-100"
                : "-translate-y-8 opacity-0 scale-95 pointer-events-none"
            }
        `}
        >
        <div
            className="
            flex
            items-center
            gap-8

            rounded-full

            border
            border-white/10

            bg-surface/80
            backdrop-blur-xl

            px-8
            py-5

            shadow-2xl
            "
        >
            {links.map((link) => (
            <a
                key={link}
                href="#"
                className="
                relative

                px-1
                py-1

                whitespace-nowrap

                text-base
                font-medium

                text-muted

                transition-all
                duration-300

                hover:text-primary
                hover:bg-white/5

                rounded-lg

                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-0
                after:bg-primary
                after:transition-all
                after:duration-300
                hover:after:w-full
                "
            >
                {link}
            </a>
            ))}
        </div>
        </nav>
    </>
    );
}

export default Navbar;