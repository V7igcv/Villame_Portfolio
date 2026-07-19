import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>

      {visible && (

        <motion.button
          onClick={scrollToTop}

          initial={{
            opacity: 0,
            y: 30,
            scale: 0.8,
          }}

          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}

          exit={{
            opacity: 0,
            y: 30,
            scale: 0.8,
          }}

          transition={{
            duration: 0.3,
          }}

          className="
            fixed
            bottom-8
            right-8

            z-50

            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-full

            bg-primary

            text-background

            shadow-[0_0_25px_rgba(56,189,248,.30)]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-secondary
            hover:shadow-[0_0_35px_rgba(6,182,212,.40)]

            active:translate-y-0
          "
        >
          <ChevronUp size={26} />
        </motion.button>

      )}

    </AnimatePresence>
  );
}

export default ScrollToTop;