import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-[var(--color-bg)] px-6 sm:px-8 md:px-10 xl:px-20 py-16 sm:py-20 font-body">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[var(--color-text)] font-titulo mb-6 text-center">
          Contáctanos
        </h2>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full bg-transparent border border-[var(--color-border)] px-4 py-3 rounded text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full bg-transparent border border-[var(--color-border)] px-4 py-3 rounded text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="¿Que necesitas?"
            required
            className="w-full resize-none bg-transparent border border-[var(--color-border)] px-4 py-3 rounded text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-end bg-[var(--color-primary)] text-white px-6 py-3 rounded font-semibold hover:bg-[var(--color-hover)] transition">
            Enviar Mensaje
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
