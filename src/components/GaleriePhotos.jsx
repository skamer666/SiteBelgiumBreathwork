import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const photos = [
  { src: '/images/seance-01.jpg', alt: 'Séance de groupe breathwork – ambiance collective', span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/images/seance-02.jpg', alt: 'Séance individuelle breathwork – espace sécurisé',  span: '' },
  { src: '/images/seance-03.png', alt: 'Moment de lâcher-prise – Hypnotic Breathwork',      span: '' },
]

export default function GaleriePhotos() {
  const [ref, inView] = useInView(0.1)

  return (
    <section ref={ref} aria-label="Galerie photos des séances"
             className="bg-sage-50 section-pad">
      <div className="container-max">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="section-tag text-sage-700 border-sage-200 bg-white mb-6">
            L'ambiance
          </span>
          <h2 className="heading-lg text-navy-700">
            Un espace de{' '}
            <span className="text-gradient">sécurité et de lâcher-prise</span>
          </h2>
          <p className="body-md text-navy-400 max-w-lg mx-auto mt-4">
            Chaque séance se déroule dans un cadre intimiste et bienveillant, à Waterloo.
          </p>
        </motion.div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:h-[520px]">
          {photos.map(({ src, alt, span }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' }}
              className={`overflow-hidden rounded-2xl shadow-soft ${span}`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-56 md:h-64 lg:h-full object-cover
                           hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
