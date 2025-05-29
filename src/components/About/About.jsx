import { motion } from "framer-motion";
import tattooTeam from "../../assets/tattooTeam.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[90vh] flex items-center justify-center bg-[var(--color-bg)] font-body px-6 sm:px-8 md:px-10 xl:px-20 py-16 sm:py-20">
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <img
          src={tattooTeam}
          alt="Nuestro equipo"
          className="w-full max-w-md md:max-w-none md:w-1/2 rounded-lg shadow-lg border border-[var(--color-border)]"
        />

        <div className="text-left md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-titulo text-[var(--color-text)] mb-4">Sobre Nosotros</h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--color-text)] leading-relaxed">
            En <span className="text-[var(--color-primary)] font-bold">TattooMS</span> somos un equipo apasionado de
            artistas del tatuaje con años de experiencia en la industria. Nos especializamos en crear diseños únicos y
            personalizados que reflejan la personalidad y estilo de cada cliente. Nuestro estudio es un espacio acogedor
            y profesional donde cada detalle cuenta, desde la higiene hasta la atención al cliente.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
