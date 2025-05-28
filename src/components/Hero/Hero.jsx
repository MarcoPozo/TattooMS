import { motion } from "framer-motion";
import heroImage from "../../assets/heroImage.png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-cover bg-top font-body" style={{ backgroundImage: `url(${heroImage})`, color: "var(--color-text)" }} id="hero">
      <div className="absolute inset-0 bg-black/60 flex flex-col items-start justify-center p-10">
        <motion.h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: "var(--font-titulo)" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Tu historia en la piel
        </motion.h1>

        <motion.p className="text-lg md:text-xl max-w-xl mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
          Expresa tu <span className="font-semibold text-white">individualidad</span> con un arte que llevarás por siempre
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" hover:bg-hover px-6 py-3 rounded-md font-semibold cursor-pointer transition"
          style={{ backgroundColor: "var(--color-primary)" }}>
          Agenda una cita
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none z-10"></div>
    </section>
  );
}
