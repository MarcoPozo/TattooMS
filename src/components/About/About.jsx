import { motion } from "framer-motion";
import tattooTeam from "../../assets/tattooTeam.jpg";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] font-body px-8 py-20">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12 max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <img src={tattooTeam} alt="Nuestro equipo" className="w-full md:w-1/2 rounded-lg shadow-lg border border-[var(--color-border)]" />

        <div className="text-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-titulo text-[var(--color-text)] mb-4">Sobre Nosotros</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            En <span className="text-[var(--color-accent)] font-semibold">TattooMS</span> somos un equipo apasionado de artistas del tatuaje con años de experiencia en la industria. Nos especializamos
            en crear diseños únicos y personalizados que reflejan la personalidad y estilo de cada cliente. Nuestro estudio es un espacio acogedor y profesional donde cada detalle cuenta, desde la
            higiene hasta la atención al cliente.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
