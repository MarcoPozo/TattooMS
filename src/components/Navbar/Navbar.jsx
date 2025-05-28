import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
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

        <ul className="flex gap-8 text-sm uppercase tracking-widest text-white">
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
    </motion.nav>
  );
}
