import { motion } from "framer-motion";
import img1 from "../../assets/gallery/1.jpg";
import img2 from "../../assets/gallery/2.jpg";
import img3 from "../../assets/gallery/3.jpg";
import img4 from "../../assets/gallery/4.jpg";
import img5 from "../../assets/gallery/5.jpg";
import img6 from "../../assets/gallery/6.jpg";

const images = [
  { src: img1, span: "row-span-2" },
  { src: img2 },
  { src: img3 },
  { src: img4, span: "col-span-2" },
  { src: img5, span: "col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2" },
  { src: img6, span: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-[var(--color-bg)] px-6 sm:px-8 md:px-10 xl:px-20 py-16 sm:py-20 font-body">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[var(--color-text)] font-titulo mb-10 text-center">
        Galería
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 auto-rows-[300px] sm:auto-rows-[350px] md:auto-rows-[400px] gap-3 sm:gap-4 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className={`overflow-hidden rounded-lg ${img.span ?? ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}>
            <img
              src={img.src}
              alt={`tattoo-${idx + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
