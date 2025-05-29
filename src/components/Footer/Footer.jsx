import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border)] text-[var(--color-text-secondary)] font-body px-6 py-10">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <div className="w-full md:w-auto">
          <h2 className="text-[var(--color-text)] font-titulo text-2xl">TattooMS</h2>
        </div>

        <div className="w-full md:w-auto">
          <h4 className="text-sm mb-2 uppercase tracking-widest font-semibold text-[var(--color-text)]">Contacto</h4>
          <ul className="text-sm space-y-1">
            <li>WhatsApp: +593 997 750 258</li>
            <li>Email: moonstudioopro@gmail.com</li>
            <li>Dirección: Quito, Ecuador</li>
          </ul>
        </div>

        <div className="w-full md:w-auto">
          <h4 className="text-sm mb-2 uppercase tracking-widest font-semibold text-[var(--color-text)]">Redes</h4>
          <ul className="flex justify-center md:justify-start gap-4 text-lg">
            <li>
              <a href="#" className="hover:text-[var(--color-accent)] transition">
                IG
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--color-accent)] transition">
                FB
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--color-accent)] transition">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <div className="mt-8 text-center text-xs text-[var(--color-text-secondary)]">
        {new Date().getFullYear()} TattooMS. Desarrollado por MoonStudio 💛💙❤️
      </div>
    </footer>
  );
}
