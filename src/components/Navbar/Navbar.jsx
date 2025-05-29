import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 font-body"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div
        className="flex items-center justify-between px-10 py-4 backdrop-blur-md backdrop-saturate-150 bg-black/30 shadow-md"
        style={{ borderBottom: "1px solid var(--color-border)" }}>
        <h1
          className="text-xl font-bold tracking-widest"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-titulo)" }}>
          TattooMS
        </h1>

        {!menuOpen && (
          <button
            className="md:hidden text-white text-2xl z-50 relative"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú">
            <FaBars />
          </button>
        )}

        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-accent transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-accent transition">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="galeria" smooth={true} duration={500} className="cursor-pointer hover:text-accent transition">
              Galeria
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-accent transition">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-white text-xl uppercase font-semibold z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-3xl text-white cursor-pointer"
              aria-label="Cerrar menú">
              <FaTimes />
            </button>

            <Link onClick={() => setMenuOpen(false)} to="hero" smooth duration={500} className="cursor-pointer hover:text-accent transition">
              Inicio
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="about" smooth duration={500} className="cursor-pointer hover:text-accent transition">
              Nosotros
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="galeria" smooth duration={500} className="cursor-pointer hover:text-accent transition">
              Galería
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="contact" smooth duration={500} className="cursor-pointer hover:text-accent transition">
              Contacto
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
